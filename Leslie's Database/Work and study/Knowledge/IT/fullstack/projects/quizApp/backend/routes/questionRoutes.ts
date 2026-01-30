const express = require('express');
const router = express.Router();
const questionController = require('./QuestionCotroller');

router.get('/questions', questionController.getAllQuestions);
router.get('/quesetions/:id', questionController.getQuestionById);
router.post('/questions', questionController.createQuestion);
router.put('/questions/:id', questionController.updateQuestion);
router.delete('/questions/:id', questionController.deleteQuestion);

module.exports = router;