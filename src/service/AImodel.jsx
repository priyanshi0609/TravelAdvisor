const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
}= require("@google/genai");

const apikey =import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
const genAI= new GoogleGenerativeAI(apikey);

const model=genAI.getGenerativeModel({
    model:"gemini-1.5-flash",
});

const generationConfig={
    temperature:1,
    topP:0.95,
    topK:64,
    maxOutputTokens:8192,
    responseMimeType: "application/json",

};

