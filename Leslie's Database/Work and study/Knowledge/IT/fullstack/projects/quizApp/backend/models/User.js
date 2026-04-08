const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    isAdmin:  { type: Boolean, default: false },
    password: { type: String, required: true },
    stats: {
        quizzesTaken: {type: Number, default: 0},
        totalScore:   {type: Number, default: 0},
        highscore:    {type: Number, default: 0},
        avaregeScore: {type: Number, default: 0}
    }
});

module.exports = mongoose.model('User', userSchema);
