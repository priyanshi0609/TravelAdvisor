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

export const chatSession =model.startChat({
    generationConfig,
    history:[
        
            role:'user',
            parts:[
                {text:"Generate Travel Plan for Loaction : Las Vegas, for 3 days for couple with a Cheap budget , give me a hotels options list with HotelName,Hotel address,Price,hotel image url , geo coordinates , rating , descriptions and suggest itinerary with placename, place details , place image url , geo coordinates , ticket pricing , rating , time travel each of the loaction for 3 days with each day plan with best time to visit in JSON format."},
            ],
            ]
        }
    ]
})