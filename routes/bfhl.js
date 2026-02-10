const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ operation_code: 1 });
});

router.post("/", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Invalid input: data must be an array"
    });
  }

  const numbers = [];
  const alphabets = [];

  data.forEach(item => {
    if (!isNaN(item)) numbers.push(item);
    else if (typeof item === "string") alphabets.push(item);
  });

  const lowercase = alphabets.filter(
    ch => ch >= "a" && ch <= "z"
  );

  res.json({
    is_success: true,
    numbers,
    alphabets,
    highest_lowercase_alphabet: lowercase.length
      ? [lowercase.sort().pop()]
      : []
  });
});

module.exports = router;
