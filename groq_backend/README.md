# 🧠 Backend: Companion Agent

## 📘 Overview

This is the **backend** service for the **Companion Agent** project — a neuroadaptive mental health chatbot. It provides **RESTful APIs** for user authentication, session management, and AI-powered conversation using **Groq LLM** and **LangChain**.

---

## 🛠️ Tech Stack

* 🐍 Python 3.10+
* 🌐 Flask (API framework)
* 🧩 LangChain (LLM orchestration)
* ⚡ Groq LLM (ultra-fast large language model)
* 🗄️ SQLite (chat history storage)
* 🧠 ChromaDB (semantic vector store for RAG)

---

## ⚙️ Setup

1. 📦 Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

2. 🔐 Create a `.env` file and add your Groq API key:

   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

3. 🚀 Run the development server:

   ```bash
   python app.py
   ```

---

## 🌐 API Endpoints

| Method | Endpoint                     | Description                           |
| ------ | ---------------------------- | ------------------------------------- |
| `POST` | `/api/register`              | Register a new user                   |
| `POST` | `/api/login`                 | Authenticate user                     |
| `POST` | `/api/chat`                  | Send a message to the chatbot         |
| `GET`  | `/api/sessions`              | List all chat sessions for a user     |
| `GET`  | `/api/sessions/<session_id>` | Fetch messages for a specific session |
| `GET`  | `/api/health`                | Health check for backend status       |

---

## 🏗️ Project Architecture

```
groq_backend/
│
├── agent.py         # 🤖 LLM agent with LangChain + ChromaDB
├── app.py           # 🌐 Flask app and API routing
├── database.py      # 🗄️ SQLite DB functions (users, sessions, messages)
├── bot_data/        # 📚 Custom knowledge base (PDFs, TXT)
├── chroma_db/       # 🧠 Vector DB storage (Chroma)
└── requirements.txt # 📦 Python dependencies
```

---

## 📝 Notes

* 🔒 For production, implement **secure password hashing** (e.g., bcrypt) and serve via **HTTPS**.
* 📂 To customize the chatbot’s knowledge base, add your own files to the `bot_data/` folder. These will be embedded and used during chat retrieval.
