const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();

const serverOptions = {
  key: fs.readFileSync("server-cert/server-key.pem"),
  cert: fs.readFileSync("server-cert/server-cert.pem"),
  ca: fs.readFileSync("client-cert/client-cert.pem"), // Certificate Authority (Client's certificate)
  requestCert: true,
  rejectUnauthorized: true,
};

app.use((req:any, res:any, next:any) => {
  // Check client certificate during SSL/TLS handshake
  const clientCert = req.socket.getPeerCertificate();

  if (req.client.authorized) {
    console.log("Client certificate subject:", clientCert.subject);
    next();
  } else {
    // Client certificate is not valid
    res.status(401).send("Unauthorized - Invalid client certificate");
  }
});

app.get("/api/data", (req:any, res:any) => {
  // Check if the client is authenticated
  if (!req.client.authorized) {
    // Client is not authenticated
    return res.status(401).send("Unauthorized - Client not authenticated");
  }

  // Your custom data logic here
  const customData = "Hello! This is the message from the server";

  // Send the response
  res.json(customData);
});

const server = https.createServer(serverOptions, app);

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
