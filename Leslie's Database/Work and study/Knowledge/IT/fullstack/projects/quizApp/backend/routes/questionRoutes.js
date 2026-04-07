const express = require('express');
const router = express.Router();
const questionController = require('../controllers/QuestionControllers');
const auth = require('../middleware/auth');

router.get('/questions',        questionController.getAllQuestions);
router.get('/questions/:id',    questionController.getQuestionById);
router.post('/questions',       auth, questionController.createQuestion);
router.put('/questions/:id',    auth, questionController.updateQuestion);
router.delete('/questions/:id', auth, questionController.deleteQuestion);

module.exports = router;