import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from '../configs/mongodb.js';
import userRoutes from '../routes/userRoutes.js';
import imageRoutes from '../routes/imageRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/images', imageRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;

// For Vercel serverless deployment
if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}