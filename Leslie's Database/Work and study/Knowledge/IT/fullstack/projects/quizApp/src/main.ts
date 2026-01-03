import { calculatePercentage, getResultMessage, isAnswerCorrect } from './quizUtilsScraps';
import './style.css';

//Dom elements
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
      questions: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Paris", correct: true },
        { text: "London", correct: false },
      ]
    },
    {
      questions: "What planet is known as the red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
      ]
    },
     {
      questions: "What is the largest ocean on Earth?",
      answers: [
        { text: "Antlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Artic Ocean", correct: true },
        { text: "Pacific Ocean", correct: false },
      ]
    },
    {
      questions: "What is the largest ocean on Earth?",
      answers: [
        { text: "Antlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Artic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ]
    },
    {
      questions: "Which of these is Not a programming language?",
      answers: [
        { text: "Java", correct: false },
        { text: "Banana", correct: false },
        { text: "Python", correct: false },
        { text: "Javascript", correct: true },
      ]
    }
  ]

 // reset variables 
 let score = 0;
 let currentQuestionIndex = 0;
 let timeRemaining = 10;
 let answersDisabled = false;
 let timerInterval: number | null = null;

 const startQuiz = () => {
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  scoreSpan.textContent = score.toString();

  showQuestions();

 }

 // set timer

 const updateTimerDisplay = () => {
  timerSpan.textContent = `${timeRemaining}`;
 }

 const startTimer = () => {
  timeRemaining = 10;
  updateTimerDisplay();

  timerInterval = window.setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if(timeRemaining <= 0){
      clearInterval(timerInterval!);    
      handleTimeout();
    }
  }, 1000)
 };

 // handletimeOut

 const handleTimeout = () => {
  answersDisabled = true;

  Array.from(answersContainer.children).forEach((button) => {
    if(button.dataset.correct === 'true'){
      button.classList.add('correct');
    }
  })

  // Move to next question after a showing correct answer
  setTimeout(() => {
    currentQuestionIndex++;

    if(currentQuestionIndex < quizQuestions.length){
      showQuestions();
    } else {
      showResults();
    }
  }, 1000)
 }

 function showQuestions(){
  answersDisabled = false;
  answersContainer.innerHTML = "";

  // startTimer
  startTimer();

  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionHeader.innerHTML = currentQuestion.questions;

  currentQuestionSpan.textContent = (currentQuestionIndex + 1).toString();

  currentQuestion.answers.forEach((answer) => {
    const answerButton = document.createElement('button') as HTMLButtonElement;
    answerButton.textContent = answer.text;
    answerButton.classList.add('answer-btn');

    answerButton.dataset.correct = answer.correct.toString();
    answersContainer.appendChild(answerButton);



    answerButton.addEventListener('click', selectAnswer)
  })
 }

 function selectAnswer(event: MouseEvent){
  console.log('answer clicked')

  if(answersDisabled) return;

  answersDisabled = true;

  //clear the timer
  if(timerInterval){
    clearInterval(timerInterval);
    timerInterval = null;
  }

  const selectedButton = event.target as HTMLButtonElement;
  const selectedText = selectedButton.textContent || "";
  const currentAnswers = quizQuestions[currentQuestionIndex].answers;
  const isCorrect = isAnswerCorrect(selectedText, currentAnswers);

  Array.from(answersContainer.children).forEach((button) => {
    if(button.dataset.correct === 'true'){
      button.classList.add('correct')
    } else (button === selectedButton) {
      button.classList.add('incorrect')
    }
  });

  if(isCorrect){
    score++;
    scoreSpan.textContent = score.toString();
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if(currentQuestionIndex < quizQuestions.length){
      showQuestions()
    } else {
      showResults()
    }
  }, 1000)

 }




 startButton.addEventListener('click', startQuiz)


});
  

