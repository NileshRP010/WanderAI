# 🌍 WanderAI – AI-Powered Travel Planning Web App

WanderAI is a modern AI-powered travel planning application that creates **personalized, day-by-day itineraries** based on your preferences, budget, and destination. Powered by **Google Gemini AI**, it delivers **engaging, realistic, and location-specific** travel plans with beautiful UI animations.

---

## ✨ Features

- 🧠 **AI-Powered Itineraries** – Generates realistic, detailed plans with morning, afternoon, and evening activities.
- 💸 **Budget-Aware Recommendations** – Suggests restaurants, accommodations, and experiences within your budget.
- 📍 **Google Maps Place IDs** – Easy mapping of must-visit spots.
- 🎨 **Beautiful UI with Animations** – Smooth page transitions, fade-ins, hover effects, and shimmer-loading states.
- 🔐 **Firebase Authentication** – Sign up, log in, and save itineraries securely.
- 📱 **Responsive Design** – Works perfectly on desktop, tablet, and mobile.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (JavaScript), Tailwind CSS, Framer Motion
- **Backend/AI:** Google Gemini API
- **Database & Auth:** Firebase
- **Deployment:** Vercel / Netlify

---

## 🚀 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/wanderai.git
   cd wanderai
Install Dependencies

bash
Copy
Edit
npm install
Set Up Environment Variables
Create a .env file in the root folder:

env
Copy
Edit
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_GEMINI_API_KEY=your_gemini_api_key
Run the App

bash
Copy
Edit
npm run dev
🧩 Folder Structure
css
Copy
Edit
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── PlannerForm.jsx
│   ├── LoadingSpinner.jsx
│   ├── ItineraryDisplay.jsx
│   ├── AuthModal.jsx
│   └── Dashboard.jsx
├── context/
│   └── AuthContext.jsx
├── services/
│   └── geminiService.js
├── firebase.js
├── App.jsx
└── main.jsx
💡 How It Works
User Inputs – Budget, trip duration, destination type, season, and preferences.

AI Generation – Data is sent to Google Gemini AI with a detailed prompt.

Itinerary Display – React UI displays morning, afternoon, and evening plans with animations.

Save & Access Later – Firebase stores itineraries for logged-in users.


🛡 License
This project is licensed under the MIT License.

🤝 Contributing
Contributions are welcome!
Fork the repo, create a feature branch, and submit a pull request.

📬 Contact
For queries or collaborations:
Your Name – nileshpathak781@gmail.com



