const User = require('../models/User');

exports.saveResult = async (req, res) => {
    try {
        const {score} = req.body;
        if(typeof score !== 'number'){
            return res.status(400).json({ error: 'score must be a number'});
        }

        const user = await User.findById(req.userId);
        if(!user) return res.status(404).json({ error: 'User not found'});

        user.stats.quizzesTaken  += 1;
        user.stats.totalScore    += score;
        user.stats.highscore      = Math.max(user.stats.highscore, score);
        user.stats.averageScore   = +(user.stats.totalScore / user.stats.quizzesTaken).toFixed(2);

        await user.save();

        res.json({ message: 'Result saved', stats: user.stats});
    } catch (err){
        res.status(500).json({ error: err.message });
    }
};

// Get top 10 hightscores(Leaderboard)

exports.getLeaderboard = async (req, res) => {
    try {
        const topUsers = await User.find()
              .select('username stats.highscore stats.quizzesTaken stats.averageScore')
              .sort({ 'stats.highscore': -1 })
              .limit(10);

        res.json(topUsers);
    }catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};