const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

// ✅ correct
app.use("/bfhl", require("./routes/bfhl"));
app.use("/gemini", require("./routes/gemini"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
