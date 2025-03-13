// api/index.js (create this file in your project root)
const express = require('express');
const cors = require('cors');
// Import your routes and other middleware
// const userRoutes = require('./routes/users');
// const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Your routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Add your other routes
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);

// For Vercel, export the Express app as the default module
module.exports = app;