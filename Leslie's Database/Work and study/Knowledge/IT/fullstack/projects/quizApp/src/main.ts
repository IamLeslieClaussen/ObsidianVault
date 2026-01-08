import { TimerManager } from './quizUtils';
import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen") as HTMLDivElement;
  const startButton = document.getElementById("start-btn") as HTMLButtonElement;
  const quizScreen = document.getElementById("quiz-screen") as HTMLDivElement;
  const endScreen = document.getElementById("end-screen") as HTMLDivElement;
  const restartButton = document.getElementById(
    "restart-btn"
  ) as HTMLButtonElement;
  const totalQuestions = document.getElementById("max-ques") as HTMLDivElement;
  const maxScore = document.getElementById("max-score") as HTMLSpanElement;
  const finalScore = document.getElementById("final-score") as HTMLSpanElement;
  const scoreSpan = document.getElementById("score") as HTMLSpanElement;
  const questionHeader = document.getElementById(
    "ques-header"
  ) as HTMLHeadingElement;
  const progressBar = document.getElementById("progress-bar") as HTMLDivElement;
  const answersContainer = document.getElementById(
    "answers-container"
  ) as HTMLDivElement;
  const currentQuestionSpan = document.getElementById(
    "ques-number"
  ) as HTMLSpanElement;
  const finalMessage = document.getElementById(
    "final-message"
  ) as HTMLDivElement;
  const timerSpan = document.getElementById('timer') as HTMLSpanElement;

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
    
  }
  
  startButton.addEventListener('click', startQuiz);
  //restartButton.addEventListener('click', restartQuiz);
  
  

})