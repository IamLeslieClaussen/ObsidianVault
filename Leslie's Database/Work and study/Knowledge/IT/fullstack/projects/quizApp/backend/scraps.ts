//Models
const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: String,
  correct: Boolean
});

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  type: { type: String, required: true }, // e.g. 'multiple-choice', 'true-false'
  answers: [answerSchema],
  category: String,
  difficulty: String
});

module.exports = mongoose.model('Question', questionSchema);


const Question = require('./models.Question');

exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({error: err.message })
    }
};

// Get a single question by ID
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if(!question) return res.status(404).json({ error: 'Question not found' })
    } catch (err){
        res.status(500).json({ error: err.message });
    }
}

// Create a new question
exports.createQuestion = async (req, res) => {
    try{
        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (err){
        res.status(400).json({ error: err.message });
    }
};

// update a question
exports.updateQuestion = async (req, res) => {
    try{
        const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updated) return res.status(404).json({ error: 'Question not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a question
exports.deleteQuestion = async (req, res) => {
  try {
    const deleted = await Question.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Question not found' });
    res.json({ message: 'Question deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



//Routes: questionRoutes.js

const express = require('express');
const router = express.Router();
const questionController = require('./QuestionController');

router.get('/questions', questionController.getAllQuestions);
router.get('/questions/:id', questionController.getQuestionById);
router.post('/questions', questionController.createQuestion);
router.put('/questions/:id', questionController.updateQuestion);
router.delete('/questions/:id', questionController.deleteQuestion);

module.exports = router;


//Register routes in your main app (e.g., app.js or server.js):

const express = require('express');
const mongoose = require('mongoose');
const questionRoutes = require('./questionRoutes');

const app = express();
app.use(express.json());
app.use('/api', questionRoutes);

// Connect to MongoDB and start server (adjust URI as needed)
mongoose.connect('mongodb://localhost:27017/quizApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
  .catch(err => console.error(err));