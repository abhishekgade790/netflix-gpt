
# 🎬 Cinenest GPT

Cinenest GPT is an AI-powered movie discovery platform that delivers smart, GPT-like movie suggestions tailored to your preferences. Built using **React**, **Firebase**, **TMDB API**, and **Gemini API**, and inspired by Netflix, this app offers a sleek, responsive, and personalized streaming experience.

🔗 **Live Site**: [https://cinenestgpt.web.app](https://cinenestgpt.web.app)

---

## 🚀 Quick Start

### 🛠️ 1. Clone and Setup

```bash
git clone https://github.com/your-username/cinenest-gpt.git
cd cinenest-gpt
```

### 📦 2. Install Dependencies

```bash
npm install
```

### 🔐 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

⚠️ **Important**: Never commit your `.env` file to public repositories.

### ▶️ 4. Start the App

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## 🔧 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** and follow setup steps
3. Navigate to **Build > Authentication** → Enable **Email/Password**
4. Go to **Project Settings > General** → Add a **Web App**
5. Copy the Firebase config and paste values in your `.env` file under `VITE_FIREBASE_*` keys

Example `firebase.js` setup:

```js
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
```

---

## 🔑 API Keys Setup

### 🎞️ TMDB API (The Movie Database)

1. Go to [https://www.themoviedb.org](https://www.themoviedb.org)
2. Sign up and navigate to **Settings > API**
3. Generate an API key
4. Add to `.env` file:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### 🤖 Gemini API (Google AI)

1. Go to [Google AI Studio (Gemini)](https://makersuite.google.com/app)
2. Sign in and generate an API Key
3. Add to `.env` file:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

---

## 📦 Firebase Hosting Deployment

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

### 3. Initialize Firebase

```bash
firebase init
```

- Choose: **Hosting**
- Public directory: `dist`
- Configure as SPA: **Yes**
- Do NOT overwrite `index.html`

### 4. Build and Deploy

```bash
npm run build
firebase deploy
```

---

## 🌟 Features

- 🔐 **Authentication**: Firebase Email/Password login
- 🤖 **Gemini AI Integration**: Personalized movie suggestions from user prompts
- 🧠 **Smart Prompts**, e.g.:
  - “Movies like Interstellar with emotional depth”
  - “Recommend heist thrillers from the 2000s”
- 🎞️ **TMDB Integration**: Fetch movie info, ratings, posters, and trailers
- ❤️ **My List**: Bookmark your favorite movies
- 🖼️ **Profile Editor**: Update name and avatar with live preview
- 🎉 **Toasts**: For success/error feedback
- ⚡ **Framer Motion Animations**
- 📱 **Responsive UI**
- 🎨 **Netflix-inspired Design**

---

## 🧠 Powered By

- [Firebase](https://firebase.google.com/)
- [TMDb API](https://www.themoviedb.org/)
- [Gemini AI (Google)](https://ai.google.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📃 License

This project is licensed under the **MIT License**.

Built with ❤️ by [Your Name]
