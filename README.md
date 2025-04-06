# 🖋️ Typing Speed Tester

A simple web-based **Typing Speed Tester** that allows users to measure their typing speed in words per minute (WPM), accuracy, and time taken. This project is ideal for practicing typing and tracking improvement over time.

## 🚀 Features

- Real-time typing speed (WPM) calculation
- Accuracy tracking (percentage of correct words)
- Countdown timer
- Restart and reset functionality
- User-friendly interface with responsive design

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend (Optional)**: Node.js, Express
- **Database (Optional)**: MongoDB (to store user scores and stats)

## 📦 Installation

### Prerequisites

- Node.js (only if using backend features)
- MongoDB Atlas account or local MongoDB setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/typing-speed-tester.git
cd typing-speed-tester
```

### 2. (Optional) Setup MongoDB

If you want to store user results:

- Create a MongoDB Atlas cluster or install MongoDB locally.
- Add a `.env` file in the root with:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
PORT=3000
```

### 3. (Optional) Start the Backend

```bash
npm install
npm start
```

### 4. Run the App

Simply open `index.html` in your browser, or visit the deployed version.

## 🧪 How It Works

1. A random text prompt is shown.
2. The user types into the input box.
3. As you type, the app:
   - Tracks correct vs. incorrect characters
   - Calculates WPM and accuracy
4. When time is up or the paragraph is complete, results are displayed.

## 📸 Screenshots

*(Add relevant UI screenshots here.)*

## 📚 Project Goals

- Practice DOM manipulation and event handling in JavaScript.
- Implement a clean UI and responsive design.
- Optionally store results and stats using MongoDB.

## 👨‍💻 Authors

- Bhavesh Raturi (B209)
- Arun Verma (B227)
- Dhruv Rawat (B241)
- Gagan Deep Singh (B243)

## 📄 License

This project is intended for learning and demonstration purposes.
