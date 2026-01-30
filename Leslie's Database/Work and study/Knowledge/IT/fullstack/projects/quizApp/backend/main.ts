const express = require('express');
const mongoose = require('mongoose');
const questionRoutes = require('./questionRoutes');

const app = express();
app.use(express.json());
app.use('/api', questionRoutes);

//Connect to MongoDB and start (adjust URI as needed)
mongoose.connect('mongodb://localhost:27017/quizApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
  .catch(err => console.error(err));