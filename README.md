# 🌟 Companion Agent: Mental Health Support Chatbot

## 🧠 Overview

**Companion Agent** is a full-stack web application that provides **empathetic, AI-powered mental health support**. It features a conversational chatbot named **"Star"**, designed to offer gentle, non-judgmental emotional support, wellness tips, and crisis resources. The project combines a robust **Python backend** (Flask, LangChain, Groq LLM) with a modern **React frontend** for a seamless experience.

---

## ✨ Features

* 💬 **Conversational AI**: Talk to *Star*, an empathetic agent powered by LLMs and a custom mental health knowledge base.
* 🔐 **User Authentication**: Secure registration and login system.
* 🗂️ **Session Management**: Save and revisit your chat history anytime.
* 🌿 **Wellness Tips**: Get gentle daily suggestions to support your mental well-being.
* 🎙️ **Speech Recognition & Synthesis**: Voice input and text-to-speech output for hands-free interaction.
* 🚨 **Crisis Resources**: Instant access to mental health helplines and support links.

---

## 🛠️ Tech Stack
### 🔧 Backend

* Python 🐍
* Flask 🏺
* LangChain 🧩
* Groq LLM ⚡
* SQLite 🗄️
* ChromaDB 🧠

### 💻 Frontend

* ReactJS ⚛️
* Vite ⚡
* TailwindCSS 🎨
* React Speech Recognition 🎤

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

* Python `3.10+`
* Node.js `18+`

---

### 🚀 Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd groq_backend
   ```
2. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```
3. Set your Groq API key in a `.env` file:

   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```
4. Start the backend server:

   ```bash
   python app.py
   ```

---

### 🌐 Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```
2. Install frontend dependencies:

   ```bash
   npm install
   ```
3. Launch the frontend:

   ```bash
   npm run dev
   ```

---

## 🧪 Usage

* Open your browser and go to: `http://localhost:5173`
* The backend should be running on: `http://localhost:5000`
* Register or log in, and start your conversation with **Star** 🌟

---

## 📁 Folder Structure

```
/ (root)
│
├── groq_backend/      # Python backend (Flask, LangChain, DB)
├── frontend/          # React frontend (Vite, TailwindCSS)
└── README.md          # Project overview (this file)
```

---

## 🤝 Contributing

Contributions are welcome! 🎉
Feel free to open issues or submit pull requests. Let's collaborate to improve the experience!

---

## 📄 License

Licensed under the [MIT License](LICENSE) 📘