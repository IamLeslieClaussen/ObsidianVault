import { isAnswerCorrect } from './quizUtilsScraps';
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

  //quiz Questions array

  const quizQuestions = [
    {
      question: "What is the capital of France?",
      answers: [
        {text: "London", correct: false},
        {text: "Berlin", correct: false},
        {text: "Paris", correct: true},
        {text: "Madrid", correct: false},
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Antlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      question: "Which of these is Not a programming language?",
      answers: [
        { text: "Java", correct: false },
        { text: "Banana", correct: false },
        { text: "Python", correct: false },
        { text: "javaScript", correct: true },
      ],
    },
  ]

  //reseting all Variables

  let score = 0;
  let currentQuestionIndex = 0;
  let answersDisabled = false;
  let timerInterval: number | null = null;
  let timeRemaining: 10;


  // startQuiz
  const startQuiz = () => {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    scoreSpan.innerText = "0";

    showQuestions()
  }

  startButton.addEventListener('click', startQuiz)
  

  // set Timer
  const updateTimerDisplay = () => {
    timerSpan.textContent = `${timeRemaining}`;
  }

  const startTimer = () => {
    timeRemaining = 10;
    updateTimerDisplay();

    timerInterval = window.setInterval(() => {
      timeRemaining--;
      updateTimerDisplay()

      if(timeRemaining <= 0){
        if (timerInterval !== null) {
          clearInterval(timerInterval);
        }
        handleTimeout();
      }
    }, 1000)
  };

  //handle Timeout
  const handleTimeout = () => {
    answersDisabled = true;

   // Highlight the correct answer
   Array.from(answersContainer.children).forEach((button) => {
    if((button as HTMLElement).dataset.correct === 'true'){
      button.classList.add('correct');
    }
   })

   //Move to the next question after showing correct answer
   setTimeout(() => {
    currentQuestionIndex++;

    if(currentQuestionIndex < quizQuestions.length){
      showQuestions();
      startTimer();
    } else {
      showResults();
    }
   }, 1000);
  }
  
  function showQuestions() {
    answersDisabled = false;
    answersContainer.innerHTML = '';

    //startTimer
    startTimer()

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionHeader.innerHTML = currentQuestion.question;
    
    currentQuestionSpan.textContent = (currentQuestionIndex + 1).toString();

    //Show questions in the question container. 
    currentQuestion.answers.forEach((answer) => {
      const answerButton = document.createElement('button')
      answerButton.textContent = answer.text;
      answerButton.classList.add('answer-btn');

      answerButton.dataset.correct = answer.correct.toString();
      answersContainer.appendChild(answerButton);

     answerButton.addEventListener('click', selectAnswer);
    })
  };

  function selectAnswer(event: MouseEvent){
    console.log('Answer selected');

    if(answersDisabled) return;

    answersDisabled = true;

    if(timerInterval){
      clearInterval(timerInterval);
      timerInterval = null;
    }

    const selectedButton = event.target as HTMLAnchorElement;
    const selectedText = selectedButton. textContent || "";
    const currentAnswers = quizQuestions[currentQuestionIndex].answers;
    const isCorrect = isAnswerCorrect(selectedText, currentAnswers);

    Array.from(answersContainer.children).forEach((button) => {
      if(button.dataset.correct === "true") {
        button.classList.add('correct')
      } else if(button === selectedButton){
        button.classList.add('incorrect');
      }
    })

    if(isCorrect){
      score++;
      scoreSpan.textContent = score.toString();


    }

    setTimeout

  }


  

});