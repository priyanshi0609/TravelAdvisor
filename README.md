# 🌍 Travel Advisor – AI-Powered Itinerary Generator

Travel Advisor is a smart web application that creates personalized travel itineraries based on your preferences using AI. Whether you're planning a solo trip, a family vacation, or a group adventure, Travel Advisor helps you plan efficiently and explore better.

## 🚀 Features

- ✈️ **AI-Powered Trip Generator** – Generates detailed itineraries using Gemini AI based on destination, duration, budget, and group type.
- 🔍 **Google Places Autocomplete** – Helps users quickly find and select travel destinations with real-time suggestions.
- 🔐 **Secure Authentication** – Integrated Google Sign-In using Firebase for safe and seamless user login.




## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend framework |
| **Tailwind CSS** | UI styling and responsive design |
| **Framer Motion** | Animations and transitions |
| **Firebase Auth** | User authentication |
| **Google Places API** | Location autocomplete |
| **Gemini API (Google Generative AI)** | AI-generated travel plans |

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/travel-advisor.git
cd travel-advisor

# Install dependencies
npm install

# Create a `.env` file and add your API keys
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key

# Run the development server
npm run dev
