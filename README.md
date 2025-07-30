# 💬 Real-Time Chat App

A clean, responsive **real-time chat application** built with **React**, **Socket.IO**, **Express**, and **Node.js**. This app allows users to chat instantly using WebSockets, styled beautifully with **Tailwind CSS**.

---

## 🛠️ Tech Stack

- **React** – Frontend framework
- **Socket.IO** – Real-time bi-directional communication
- **Express** – Backend server for handling routes and WebSocket connections
- **Node.js** – Backend runtime environment
- **Tailwind CSS** – Modern utility-first CSS framework for styling

---

## ✅ Features

- 🔁 Real-time **2-way communication**
- 🎨 **Clean and responsive UI** with Tailwind CSS
- 🔔 Auto-scroll to the latest message
- 📱 Mobile-friendly layout
- ⚡ Lightweight and fast

---

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chat-app
cd chat-app

2. Setup the Server

bash
Copy
Edit
cd server
npm install
node index.js
Server runs on http://localhost:3000


3. Setup the Client

bash
Copy
Edit
cd client
npm install
npm run dev
Client runs on http://localhost:5173 (Vite) or http://localhost:3000 (CRA)

🌐 How It Works
A user connects to the server via Socket.IO.

Messages are emitted from the client and broadcast by the server.

Other connected users receive the messages in real time.

UI updates instantly using React state and hooks.

