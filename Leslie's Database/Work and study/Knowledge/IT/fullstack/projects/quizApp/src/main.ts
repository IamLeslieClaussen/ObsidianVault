import { calculatePercentage, getResultMessage, isAnswerCorrect, TimerManager } from './quizUtils';
import './style.css';

let quizQuestions: any[] = [];


async function loadQuestions() {
  const response = await fetch('/quizquestions.json');
  quizQuestions = await response.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadQuestions();
  const startScreen = document.getElementById("start-screen") as HTMLDivElement;
  const startButton = document.getElementById("start-btn") as HTMLButtonElement;
  const quizScreen = document.getElementById("quiz-screen") as HTMLDivElement;
  const endScreen = document.getElementById("end-screen") as HTMLDivElement;
  const restartButton = document.getElementById(
    "restart-btn"
  ) as HTMLButtonElement;
  // Nicht genutzte Variablen entfernt
  const maxScore = document.getElementById("max-score") as HTMLSpanElement;
  const finalScore = document.getElementById("final-score") as HTMLSpanElement;
  const scoreSpan = document.getElementById("score") as HTMLSpanElement;
  const questionHeader = document.getElementById("ques-header") as HTMLHeadingElement;
  const answersContainer = document.getElementById("answers-container") as HTMLDivElement;
  const currentQuestionSpan = document.getElementById("ques-number") as HTMLSpanElement;
  const finalMessage = document.getElementById("final-message") as HTMLDivElement;

  const quizQuestions = [
    {
      questions: "What is the capital of France",
      answers: [
        {text: 'London', correct: false},
        {text: 'Berlin', correct: false},
        {text: 'Paris', correct: false},
        {text: 'London', correct: false},
      ]
    },
     {
      questions: "What is the capital of France",
      answers: [
        {text: 'London', correct: false},
        {text: 'Berlin', correct: false},
        {text: 'Paris', correct: false},
        {text: 'London', correct: false},
      ]
    },
     {
      questions: "What is the capital of France",
      answers: [
        {text: 'London', correct: false},
        {text: 'Berlin', correct: false},
        {text: 'Paris', correct: false},
        {text: 'London', correct: false},
      ]
    },
     {
      questions: "What is the capital of France",
      answers: [
        {text: 'London', correct: false},
        {text: 'Berlin', correct: false},
        {text: 'Paris', correct: false},
        {text: 'London', correct: false},
      ]
    },
     {
      questions: "What is the capital of France",
      answers: [
        {text: 'London', correct: false},
        {text: 'Berlin', correct: false},
        {text: 'Paris', correct: false},
        {text: 'London', correct: false},
      ]
    }
  ];

  //reset Variables
  let score: number = 0;
  let currentQuestionIndex: number = 0;
  let answersDisabled: boolean = false;
  const timerManager = new TimerManager('timer')

  // Callback für Timer-Timeout: gehe zur nächsten Frage oder zeige das Ergebnis
  timerManager.setOnTimeoutCallback(() => {
    if (answersDisabled) return;
    answersDisabled = true;
    // Markiere alle Antworten als falsch
    Array.from(answersContainer.children).forEach((button) => {
      const btn = button as HTMLButtonElement;
      if (btn.dataset.correct === 'true') {
        btn.classList.add('correct');
      }
    });
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizQuestions.length) {
        showQuestions();
      } else {
        showResult();
      }
    }, 1000);
  });

  const startQuiz = () => {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    scoreSpan.innerText = '0';

    showQuestions();
  }

  const showQuestions = () => {
    answersDisabled = false;
    answersContainer.innerHTML = '';

    timerManager.startTimer(10);

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionHeader.innerHTML = currentQuestion.questions;

    currentQuestionSpan.textContent = (currentQuestionIndex + 1).toString();

    currentQuestion.answers.forEach((answer) => {
      const answerButton = document.createElement('button');
      answerButton.textContent = answer.text;
      answerButton.classList.add('answer-btn');

      answerButton.dataset.correct = answer.correct.toString();
      answersContainer.appendChild(answerButton);

      answerButton.addEventListener("click", selectAnswer);
    })
    
  };

  function selectAnswer(event: MouseEvent) {
    console.log('answer Clicked')

    if(answersDisabled) return;

    answersDisabled = true;

    //stop the timer
    timerManager.stopTimer();

    const selectedButton = event.target as HTMLButtonElement;
    const selectedText = selectedButton.textContent || '';
    const currentAnswers = quizQuestions[currentQuestionIndex].answers;
    const isCorrect = isAnswerCorrect(selectedText, currentAnswers);

    Array.from(answersContainer.children).forEach((button) => {
      const btn = button as HTMLButtonElement;
      if (btn.dataset.correct === 'true') {
        btn.classList.add('correct');
      } else if (btn === selectedButton) {
        btn.classList.add('incorrect');
      }
    });

    if(isCorrect){
      score++;
      scoreSpan.innerText = score.toString();
    }

    //check if there are more questions

    setTimeout(() => {
      currentQuestionIndex++;

      if(currentQuestionIndex < quizQuestions.length){
        showQuestions()
      } else {
        showResult()
      }
    }, 1000)
  }

  function showResult() {
    timerManager.stopTimer();

    quizScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');

    finalScore.textContent = score.toString();
    maxScore.textContent = quizQuestions.length.toString();

    const percentage = calculatePercentage(score, quizQuestions.length);

    finalMessage.textContent = getResultMessage(percentage);
  }

  function restartQuiz() {
    timerManager.stopTimer();
    currentQuestionIndex = 0;
    score = 0;
    answersDisabled = false;
    scoreSpan.innerText = '0'

    endScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');

  }
  
  startButton.addEventListener('click', startQuiz);
  restartButton.addEventListener('click', restartQuiz);
  //restartButton.addEventListener('click', restartQuiz);
  
  

})