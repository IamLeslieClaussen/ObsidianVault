const Question = requrie('./models.Question');

exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json()
    } catch (err){
        res.status(500).json({error: err.message})
    }
}

// get a single question by ID

exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if(!question) return res.status(404).json({ error: 'Question not found' })
    } catch (err){
        res.status(500).json
    }
}

// Create a new question
exports.createQuestion = async (req, res) => {
    try{
        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(400).json({ error: err.messge});
    }
};

//update a question
exports.updateQuestion = async (req, res) => {
    try {
        const updated = await Question.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updated) return res.status(404).json({error: 'Question not found' });
        res.json(updated);
    } catch (err){
        res.status(400).json({ error: err.message});
    }
}

//Delete a question
exports.deleteQuestion = async (req, res) => {
    try{
        const deleted = await Question.findByAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({ error: 'Question not found'});
        res.json({ message: 'Question deleted'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}