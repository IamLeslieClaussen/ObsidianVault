export function isAnswerCorrect(
    selected: string, 
    answers: {text: string; correct: boolean}[],
): boolean {
    const found = answers.find((answer) => answer.text === selected);
    if (found) {
        return found.correct;
    }
    return false;
}