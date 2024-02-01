"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Hello, Mutual TLS!");
});
router.get("/api/data", (req, res) => {
    // Your route logic here
});
exports.default = router;
