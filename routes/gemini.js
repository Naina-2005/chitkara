const express = require("express");
const router = express.Router();
const runGemini = require("../services/gemini");

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const output = await runGemini(prompt);
    res.json({ success: true, output });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
