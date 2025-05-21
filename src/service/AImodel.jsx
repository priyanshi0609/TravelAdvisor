// src/service/AImodel.jsx
import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔐 Gemini API Key from Vite environment
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// This function sends the prompt and returns the parsed JSON response
export async function generateItinerary(location, days, groupType, budgetType) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Generate a travel plan for Location: ${location}, for ${days} days for ${groupType} with a ${budgetType} budget. 
Give me a hotel options list with:
  - Hotel name
  - Address
  - Price
  - Hotel image URL
  - Geo coordinates
  - Rating
  - Description

Also, suggest a day-by-day itinerary with:
  - Place name
  - Place details
  - Image URL
  - Geo coordinates
  - Ticket pricing
  - Rating
  - Travel time
  - Best time to visit

🔒 Return **only** a valid JSON inside a markdown code block like this:
\`\`\`json
{
  "hotels": [...],
  "itinerary": {
    "day1": [...],
    "day2": [...]
  }
}
\`\`\`

DO NOT include any other explanation, note, or commentary.`;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const response = await result.response;
    const text = await response.text();

    // Extract the JSON inside a code block if present
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    const jsonText = jsonMatch ? jsonMatch[1] : text.match(/\{[\s\S]*\}/)?.[0];

    if (!jsonText) {
      throw new Error("No valid JSON found in the response.");
    }

    const data = JSON.parse(jsonText);
    return data;

  } catch (error) {
    console.error("Error generating itinerary:", error);
    return null;
  }
}