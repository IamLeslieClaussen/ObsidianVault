import './style.css'


document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen') as HTMLDivElement
    const startButton = document.getElementById('start-btn') as HTMLButtonElement
    const quizScreen = document.getElementById('quiz-screen') as HTMLDivElement
    const endScreen = document.getElementById('end-screen') as HTMLDivElement
    const restartButton = document.getElementById('restart-btn') as HTMLButtonElement
    const totalQuestions = document.getElementById('max-ques') as HTMLDivElement
    const maxScore = document.getElementById('max-score') as HTMLSpanElement
    const finalScore = document.getElementById('final-score') as HTMLSpanElement
    const scoreSpan = document.getElementById('score') as HTMLSpanElement
    const questionHeader = document.getElementById('ques-header') as HTMLHeadingElement
    const progressBar = document.getElementById('progress-bar') as HTMLDivElement
    const answersContainer = document.getElementById('answers-container') as HTMLDivElement


    const quizQuestions = [
        {
            question: "What is the capital of France?",
            answers: [
                { text: 'Berlin', correct: false },
                { text: 'London', correct: false },
                { text: 'Madrid', correct: false },
                { text: 'Paris', correct: true },
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: 'Venus', correct: false },
                { text: 'Mars', correct: true },
                { text: 'Jupiter', correct: false },
                { text: 'Saturn', correct: false },
            ]
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: [
                { text: 'Atlantic Ocean', correct: false },
                { text: 'Indian Ocean', correct: false },
                { text: 'Arctic Ocean', correct: false },
                { text: 'Pacific Ocean', correct: true },
            ]
        },
        {
            question: "Which of these is NOT a programming language?",
            answers: [
                { text: 'Java', correct: false },
                { text: 'Python', correct: false },
                { text: 'Banana', correct: true },
                { text: 'JavaScript', correct: false },
            ]
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                { text: 'Au', correct: true },
                { text: 'Ag', correct: false },
                { text: 'Pb', correct: false },
                { text: 'Fe', correct: false },
            ]
        }
    ];

    // Quiz state variables
    let currentQuestionIndex = 0;
    let score = 0;
    let answersDisabled = false;

    
    totalQuestions.innerHTML = quizQuestions.length.toString();
    
    

    const startQuiz = () => {
        currentQuestionIndex = 0;
        score = 0;
        scoreSpan.innerHTML = score.toString();


        startScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden')

        showQuestion();
    }

    const showQuestion = () => {
        answersDisabled = false;

        const currentQuestion = quizQuestions[currentQuestionIndex];

        questionHeader.textContent = currentQuestion.question;

        const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        answersContainer.innerHTML = ''

        currentQuestion.answers.forEach((answer) => {
            const answerBtn = document.createElement('button');
            answerBtn.textContent = answer.text;
            answerBtn.classList.add('answer-btn');

            answerBtn.dataset.correct = answer.correct.toString();

            const selectAnswer = (event: MouseEvent) => {
                if (answersDisabled) return;

                answersDisabled = true;

                const selectedBtn = event.currentTarget as HTMLButtonElement;
                const isCorrect = selectedBtn.dataset.correct === 'true';

                Array.from(answersContainer.children).forEach((btn) => {
                    if(btn.dataset.correct === 'true') {
                        btn.classList.add('correct');
                } else if (btn === selectedBtn) {
                        btn.classList.add('incorrect');
                }});

                if(isCorrect) {
                    score++;
                    scoreSpan.innerHTML = score.toString();
                }

                setTimeout(() => {
                    currentQuestionIndex++;

                    //check if there are more questions
                    if(currentQuestionIndex < quizQuestions.length) {
                        showQuestion()
                    } else {
                        showResults()
                    }
                }, 1000);
};

            const showResults = () => {
                quizScreen.classList.add('hidden');
                endScreen.classList.remove('hidden');

                finalScore.innerHTML = score.toString();

                const percentage = (score / quizQuestions.length) * 100;
            }

            answerBtn.addEventListener('click', selectAnswer);

            answersContainer.appendChild(answerBtn);
            

        })

    }

    startButton.addEventListener('click', startQuiz);
    
})

