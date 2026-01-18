// Models
const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    text: String,
    correct: Boolean
});

const questionsSchema = new mongoose.Schema({
    question: {type: String, required: true },
    type: { type: String, required: true},
    answers: [answerSchema],
    category: String,
    difficulty: String
});

module.exports = mongoose.model('Question', questionsSchema);