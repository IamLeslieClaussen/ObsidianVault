import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  calculatePercentage,
  isAnswerCorrect,
  getResultMessage,
  TimerManager
} from "./quizUtils";

describe("calculatePercentage", () => {
  it('returns the correct percentage', () => {

    //Arrange
    const score = 3;
    const total = 5;

    //Act
    const result = calculatePercentage(score, total);

    //Assert
    expect(result).toBe(60);
  })
});

describe('isAnswerCorrect', () => {
  it('returns true for correct answer', () => {
    //Arrange
    const answers = [
      {text: "A", correct: false},
      {text: "A", correct: true},

    ];

    //Act
    const result = isAnswerCorrect('B', answers);

    //Assert
    expect(result).toBe(true)
  })
})

describe('getResultMessage', () =>{
  it('returns "great job" for 100%', () =>{
    //Arrange and Act

    const result = getResultMessage(100);

    // Assert
    expect(result).toBe('great job');
  })
})

describe('TimerManager', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = '<span id="timer"></span>';
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('startTimer setzt die Zeit und aktualisiert das Display', () => {
    const timer = new TimerManager('timer');
    timer.startTimer(5);
    expect(timer.getTimeRemaining()).toBe(5);
    expect(document.getElementById('timer')!.textContent).toBe('5');
  });

  it('stopTimer stoppt den Timer', () => {
    const timer = new TimerManager('timer');
    timer.startTimer(5);
    timer.stopTimer();
    vi.advanceTimersByTime(2000);
    expect(timer.getTimeRemaining()).toBe(5);
  });

  it('ruft Callback nach Ablauf auf', () => {
    const timer = new TimerManager('timer');
    const callback = vi.fn();
    timer.setOnTimeoutCallback(callback);
    timer.startTimer(2);
    vi.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalled();
  });
});