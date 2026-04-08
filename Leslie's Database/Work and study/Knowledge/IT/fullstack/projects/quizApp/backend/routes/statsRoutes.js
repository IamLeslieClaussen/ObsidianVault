const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const statsController = require('../controllers/statsController')

router.post('/result',  auth, statsController.saveResult);
router.get('/profile', auth, statsController.getProfile);
router.get('/leaderboard', statsController.getLeaderboard);

module.exports = router;