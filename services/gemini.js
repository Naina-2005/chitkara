// 1. Ensure you use the new import name
const { GoogleGenAI } = require('@google/genai');

// 2. Initialize the client (it now takes an options object)
const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

async function runGemini(prompt) {
  try {
    // 3. New method: ai.models.generateContent
    const result = await ai.models.generateContent({
      // Use the latest 2026 stable/preview model
      model: "gemini-3-flash-preview", 
      contents: [{ role: 'user', parts: [{ text: prompt }] }]
    });

    // 4. In the new SDK, text is a direct property of the response
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

module.exports = runGemini;