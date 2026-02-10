const axios = require("axios");

exports.getAIResponse = async (question) => {
  if (typeof question !== "string") throw new Error("Invalid AI input");

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: question }] }]
    }
  );

  return response.data.candidates[0].content.parts[0].text
    .split(" ")[0];
};
