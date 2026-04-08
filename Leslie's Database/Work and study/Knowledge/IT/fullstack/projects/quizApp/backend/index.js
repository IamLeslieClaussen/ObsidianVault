require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const questionRoutes = require('./routes/questionRoutes');
const authRoutes = require('./routes/authRoutes');
const statsRoutes = require('./routes/statsRoutes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', questionRoutes);
app.use('/api', statsRoutes);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/quizApp';
const PORT = process.env.PORT || 3000;

mongoose
  .connect(MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error('MongoDB connection error:', err));


  