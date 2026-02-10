const express = require("express");
const router = express.Router();

const { bfhlHandler } = require("../controllers/bfhlController");

router.post("/", bfhlHandler);

module.exports = router;
