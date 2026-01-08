// timer Manager

export interface timerState {
  timeRemaining: number,
  timerInterval: number | null,
}

export class timerManger {
  private state: timerState = {
    timeRemaining: 10,
    timerInterval: null,
  }

  private timerSpan: HTMLSpanElement;
  private onTimeoutCallback: (() => void) | null = null;

  constructor(timerElementId: string){
    this.timerSpan = document.getElementById(timerElementId) as HTMLSpanElement
  }

  setOnTimeoutCallback(callback: () => void): void {
    this.updateDisplay();
  }

  private updateDisplay(): void {
    this.timerSpan.textContent = `${this.state.timeRemaining }`
  }

  startTimer(duration: number = 10): void {
    this.state.timeRemaining = duration;
    this.updateDisplay();

    this.state.timerInterval = window.set
  }

  
}

