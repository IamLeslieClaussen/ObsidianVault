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
                    this.onTimeoutCallback();
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
        return this.state.timerInterval !== null
    }
}


export function isAnswerCorrect(
    selected: string,
    answers: {text: string, correct: boolean}[]
): boolean {
    const found = answers.find((answer) => answer.text === selected);
    return found? found.correct : false
}

export function calculatePercentage(score: number, total: number){
    if(total === 0) return 0;
    return(score / total) * 100;
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
