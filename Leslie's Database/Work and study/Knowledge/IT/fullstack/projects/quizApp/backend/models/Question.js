// Models
const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    text: String,
    correct: Boolean
});

const questionSchema = new mongoose.Schema({
    question: {type: String, require: true},
    type: {type: String, required: true},
    answers: [answerSchema],
    category: String,
    difficulty: String

});

module.exports = mongoose.model('Question', questionSchema,)