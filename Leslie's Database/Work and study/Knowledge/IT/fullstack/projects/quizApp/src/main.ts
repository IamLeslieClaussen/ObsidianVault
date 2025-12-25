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
    const currentQuestionSpan = document.getElementById('ques-number') as HTMLSpanElement
    const finalMessage = document.getElementById('final-message') as HTMLDivElement

   const quizQuestions = [
    {
        questions: 'What is the capital of France?',
        answers: [
            {text: 'London', correct: false},
            {text: 'Berlin', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Madrid', correct: false},
        ],
    },
    {
        questions: 'Which planet is known as the Red Planet?',
        answers: [
            {text: 'Venus', correct: false},
            {text: 'Mars', correct: true},
            {text: 'jupiter', correct: false},
            {text: 'Saturn', correct: false},
        ],
    },
    {
        questions: 'What is the largest ocean on Earth?',
        answers: [
            {text: 'Antlantic Ocean', correct: false},
            {text: 'Indian Ocean', correct: false},
            {text: 'Arctic Ocean', correct: false},
            {text: 'Pacific Ocean', correct: true},
        ],
    },
    {
        questions: 'What is the largest ocean on Earth?',
        answers: [
            {text: 'Antlantic Ocean', correct: false},
            {text: 'Indian Ocean', correct: false},
            {text: 'Arctic Ocean', correct: false},
            {text: 'Pacific Ocean', correct: true},
        ],
    },
    {
        questions: 'Which of these is Not a programming language?',
        answers: [
            {text: 'Java', correct: false},
            {text: 'Banana', correct: false},
            {text: 'Python', correct: false},
            {text: 'javaScript', correct: true},
        ],
    },
   ]

    // reseting variables
        let currentQuestionIndex = 0;
        let score = 0;
        
        let answersDisabled = false;


  const  startQuiz = () => {
        startScreen.classList.add('hidden')
        quizScreen.classList.remove('hidden')
        scoreSpan.innerText = '0'

       
        showQuestion();
  }

    const showQuestion = () => {
        // clear previous answers
        answersDisabled = false;
        answersContainer.innerHTML = '';
        //scoreSpan.innerText = '0';

        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionHeader.innerHTML = currentQuestion.questions;

        currentQuestionSpan.textContent = (currentQuestionIndex + 1).toString();

        const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length);
        progressBar.style.width = `${progressPercent * 100}%`

        console.log("Progress width:", progressBar.style.width);

        currentQuestion.answers.forEach((answer) => {
            const answerButton = document.createElement('button');
            answerButton.textContent = answer.text;
            answerButton.classList.add('answer-btn');

            answerButton.dataset.correct = answer.correct.toString();
            answersContainer.appendChild(answerButton);
            
            // Add event listener so selectAnswer is called
            answerButton.addEventListener('click', selectAnswer);

        })

    }

    function selectAnswer(event: MouseEvent) {
        console.log("Answer clicked");
        // optimization check
        if(answersDisabled) return;

        answersDisabled = true;

        const selectedButton = event.target as HTMLButtonElement;
        const isCorrect = selectedButton.dataset.correct === 'true';

        Array.from(answersContainer.children).forEach((button) => {
            

            if(button.dataset.correct === 'true'){
                button.classList.add('correct')
            } else if (button === selectedButton){
                button.classList.add('incorrect')
            }
        });

        if(isCorrect){
            score++;
            scoreSpan.textContent = score.toString()
        }

        setTimeout(() => {
            currentQuestionIndex++;

            //check if there are more questions
            if(currentQuestionIndex < quizQuestions.length){
                showQuestion();
            } else {
                showResults()
            }
            
        }, 1000)

       
    }

    function showResults() {
        quizScreen.classList.add('hidden');
        endScreen.classList.remove('hidden');

        finalScore.textContent = score.toString();
        maxScore.textContent = quizQuestions.length.toString();

        const percentage = (score / quizQuestions.length) * 100;   
        console.log(percentage)

        if(percentage === 100){
            finalMessage.textContent = "Perfect score! Well done!";
        } else if (percentage >= 80){ 
            finalMessage.textContent = "Great job! You did really well!";
        } else if (percentage >= 60){
            finalMessage.textContent = "Good effort! You can do even better!";
        } else {
            finalMessage.textContent = "Keep trying! Practice makes perfect!";
        }
    }

    function restartQuiz() {
        // reset variables
        currentQuestionIndex = 0;
        score = 0;

        endScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    }




   // event listeners
  startButton.addEventListener('click', startQuiz);
  restartButton.addEventListener('click', restartQuiz)
})

