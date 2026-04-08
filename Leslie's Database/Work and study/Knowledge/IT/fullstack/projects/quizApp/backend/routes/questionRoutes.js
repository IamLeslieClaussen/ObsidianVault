const express = require('express');
const router = express.Router();
const questionController = require('../controllers/QuestionControllers');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth')

router.get('/questions',        questionController.getAllQuestions);
router.get('/questions/:id',    questionController.getQuestionById);


//Admin routes
router.post('/questions',          adminAuth, questionController.createQuestion);
router.put('/questions/:id',       adminAuth, questionController.updateQuestion);
router.delete('/questions/:id',    adminAuth, questionController.deleteQuestion);



module.exports = router;