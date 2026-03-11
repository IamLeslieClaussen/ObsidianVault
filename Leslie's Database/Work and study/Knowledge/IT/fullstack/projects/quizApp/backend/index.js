require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const questionRoutes = require('./routes/questionRoutes');

const app = express();
app.use(express.json());
app.use('/api', questionRoutes);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/quizApp';
const PORT = process.env.PORT || 3000;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error('MongoDB connection error:', err));


  