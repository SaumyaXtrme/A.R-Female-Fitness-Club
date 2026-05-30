// Import required core modules
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
// Use the port provided by Replit or default to 3000 locally
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE CONFIGURATION ---
// Enable CORS so your Wix frontend or local site can communicate with this backend safely
app.use(cors());

// Allow the server to parse incoming JSON payloads automatically
app.use(express.json());

// Allow the server to parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// --- ROUTING / ENDPOINTS ---

// 1. Base Health Check Route (To confirm your backend is live)
app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Welcome to the AR Female Fitness Club Backend API!",
        timestamp: new Date()
    });
});

// 2. Sample Active Route (e.g., fetching fitness classes or programs)
app.get('/api/classes', (req, res) => {
    const fitnessClasses = [
        { id: 1, name: "Yoga & Mindfulness", duration: "45 mins", level: "Beginner" },
        { id: 2, name: "High-Intensity Interval Training (HIIT)", duration: "30 mins", level: "Intermediate" },
        { id: 3, name: "Strength & Conditioning", duration: "60 mins", level: "Advanced" }
    ];
    res.status(200).json(fitnessClasses);
});

// 3. Robust Error Handling Middleware (Catches unhandled errors gracefully)
app.use((err, req, res, next) => {
    console.error("SERVER ERROR LOG:", err.stack);
    res.status(500).json({
        status: "error",
        message: "Something went wrong on our end. Please try again later."
    });
});

// --- START THE SERVER ---
app.listen(PORT, () => {
    console.log(`=============================================`);
    console.log(` Server is running and stable!`);
    console.log(` Local Access: http://localhost:${PORT}`);
    console.log(`=============================================`);
});