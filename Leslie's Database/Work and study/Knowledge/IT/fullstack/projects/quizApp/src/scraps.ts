import { calculatePercentage, getResultMessage, isAnswerCorrect, TimerManager } from './quizUtils';
import './style.css';

let quizQuestions: any[] = [];



function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function loadQuestions() {
  const response = await fetch('/quizquestions.json');
  quizQuestions = await response.json();
  shuffleArray(quizQuestions);
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

    //check if it's a true/false question
    if(currentQuestion.type === 'true-false') {
      ['True', 'False'].forEach((option: string) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = option;
        answerButton.classList.add('answer-btn');
        answerButton.dataset.correct = String(option === currentQuestion.answer);
        answersContainer.appendChild(answerButton);
        answerButton.addEventListener('click', selectAnswer);
      });
    } else {
      // Default: multiple-choice
      currentQuestion.answers.forEach((answer: { text: string; correct: boolean }) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer.text;
        answerButton.classList.add('answer-btn');
        answerButton.dataset.correct = String(answer.correct);
        answersContainer.appendChild(answerButton);
        answerButton.addEventListener("click", selectAnswer);
      });
    }
  };
  function selectAnswer(event: MouseEvent) {
    console.log('answer Clicked')

    if(answersDisabled) return;
    answersDisabled = true;
    timerManager.stopTimer();

    const selectedButton = event.target as HTMLButtonElement;
    const selectedText = selectedButton.textContent || '';
    const currentQuestion = quizQuestions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQuestion.type === 'true-false') {
      // For true/false, compare selectedText to answer
      isCorrect = selectedText === currentQuestion.answer;
    } else {
      // For multiple-choice, use isAnswerCorrect as before
      const currentAnswers = currentQuestion.answers;
      isCorrect = isAnswerCorrect(selectedText, currentAnswers);
    }

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

    setTimeout(() => {
      currentQuestionIndex++;
      if(currentQuestionIndex < quizQuestions.length){
        showQuestions();
      } else {
        showResult();
      }
    }, 1000);
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
});
  


//src/scraps.ts// Hier können Sie Code-Schnipsel oder Notizen ablegen, die Sie später verwenden möchten.

export function isAnswerCorrect(
    selected: string,
    answers: {text: string, correct: boolean}[]
): boolean {
    const found = answers.find((answer) => answer.text = selected);
    return found? found.correct : false
}

export function calculatePercentage(score: number, total: number){
    if(total === 0) return 0;
    return (score / total) * 100;
}

export function getResultMessage(percentage: number){
    if(percentage === 100) {
        return "great job";
    } else if(percentage >= 80){
        return "well done";
    } else {
        return "keep practicing";
    }
}

// Timer Manager
export interface TimerState {
    timeRemaining: number;
    timerInterval: number | null;
}

export class TimerManager {
    private state: TimerState = {
        timeRemaining: 10,
        timerInterval: null
    }

    private timerSpan: HTMLSpanElement;

    private onTimeoutCallback: (() => void) | null = null;

    constructor(timerElementId: string){
        this.timerSpan = document.getElementById(timerElementId) as HTMLSpanElement;
    }

    setOnTimeoutCallback(callback: () => void){
        this.onTimeoutCallback = callback;
    }

    private updateDisplay(){
        this.timerSpan.textContent = `${this.state.timeRemaining}`;
    }

    startTimer(duration: number = 10): void {
        this.state.timeRemaining = duration;
        this.updateDisplay();

        this.state.timerInterval = window.setInterval(() => {
            this.state.timeRemaining--;
            this.updateDisplay();

            if(this.state.timeRemaining <= 0){
                this.stopTimer();
                if(this.onTimeoutCallback){
                    this.onTimeoutCallback()
                }
            }
        }, 1000)
    }

    stopTimer(): void {
        if(this.state.timerInterval !== null){
            clearInterval(this.state.timerInterval);
            this.state.timerInterval = null;
        }
    }
    
    getTimeRemaining(): number {
        return this.state.timeRemaining;
    }

    isRunning(): boolean {
        return this.state.timerInterval !== null;
    }


}