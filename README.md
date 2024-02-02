# mTLS Implementation using TypeScript

## Overview
This project is an implementation of mutual TLS (mTLS) using TypeScript. It aims to provide a secure communication layer between client and server through the use of mutual authentication and encrypted communication.

## Features
- Mutual TLS authentication between client and server.
- Secure communication over HTTPS/TLS.

## Requirements
- Node.js
- npm

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sanyam-Dhawan-1998/mutualTLS.git
   
2. Installing the dependencies
-  Write the **npm install** command in your terminal to install the required dependencies

3. Building the project
- Write the **npm run build** command in your terminal to build the project

4. Generating the SSL certificates
- In this project I have used self-signed certificates which can be generated using the openssl command in your terminal
- For generating the certificate for the server and client follow the below steps
-  Generate a Server Private Key and Certificate
-   Generate a private key for the server
     ```bash
      openssl genpkey -algorithm RSA -out server-key.pem
- Generate a certificate signing request (CSR) for the server
     ```bash
     openssl req -new -key server-key.pem -out server-csr.pem
- Generate a self-signed certificate for the server
    ```bash
    openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem
 
