
# 🎬 Cinenest GPT

**Cinenest GPT** is an AI-powered movie discovery platform that delivers smart, GPT-like movie suggestions tailored to your preferences. Built using **React**, **Firebase**, **TMDB API**, and **Gemini API**, and inspired by Netflix, this app offers a sleek, responsive, and personalized streaming experience.

🔗 **Live Site**: [https://cinenestgpt.web.app](https://cinenestgpt.web.app)

---

## 🚀 Quick Start

### 🛠️ 1. Clone and Setup

```bash
git clone https://github.com/your-username/cinenest-gpt.git
cd cinenest-gpt
📦 2. Install Dependencies
bash
Copy code
npm install
🔐 3. Set Up Environment Variables
Create a .env file in the root directory and add the following:

env
Copy code
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
⚠️ Important: Never commit your .env file to public repositories.

▶️ 4. Start the App
bash
Copy code
npm run dev
Then open http://localhost:5173 in your browser.

🔧 Firebase Setup
Go to Firebase Console

Click "Add project", name it (e.g., CinenestGPT)

Go to Build > Authentication → Enable Email/Password

Go to Project Settings > General → Add a Web App

Copy the Firebase config and paste values into your .env file

Example firebase.js:

js
Copy code
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
🔑 Get API Keys
🎞️ TMDB API
Visit TMDB

Sign up and go to Settings > API

Generate your API key

Add to .env:

env
Copy code
VITE_TMDB_API_KEY=your_tmdb_api_key
🤖 Gemini API (Google AI)
Go to Gemini API on Google AI Studio

Sign in and generate an API key

Add to .env:

env
Copy code
VITE_GEMINI_API_KEY=your_gemini_api_key
📦 Firebase Hosting Deployment
1. Install Firebase CLI
bash
Copy code
npm install -g firebase-tools
2. Login to Firebase
bash
Copy code
firebase login
3. Initialize Firebase
bash
Copy code
firebase init
Choose: Hosting

Set public directory: dist

Configure as SPA: Yes

4. Build and Deploy
bash
Copy code
npm run build
firebase deploy
🌟 Features
🔐 Firebase Authentication (Email/Password)

🤖 Gemini AI-powered movie recommendations

🧠 Smart prompt search:

“Movies like Interstellar with emotional depth”

“Recommend heist thrillers from the 2000s”

🎞️ TMDB API for trailers, ratings, posters, and overviews

❤️ Add to “My List” (Bookmarks)

🖼️ Profile management with live avatar preview

🎉 Toast alerts for actions

⚡ Smooth animations with Framer Motion

🎨 Netflix-style dark UI, fully responsive

🧠 Built With
Firebase

TMDB API

Gemini AI

React

Tailwind CSS

Framer Motion

📃 License
This project is licensed under the MIT License.

Built with ❤️ by [Your Name]

yaml
Copy code

---

Let me know if you want this as a downloadable `.md` file or integrated into your GitHub repo!









