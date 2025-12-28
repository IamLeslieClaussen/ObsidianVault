export function calculatePercentage(score: number, total: number): number {
  if (total === 0) return 0;
  return (score / total) * 100;
}

export function isAnswerCorrect(
  selected: string,
  answers: { text: string; correct: boolean }[]
): boolean {
  const found = answers.find((answer) => answer.text === selected);
  return found ? found.correct : false;
}

export function getResultMessage(percentage: number): string {
  if (percentage === 100) {
    return "great job";
  } else if (percentage >= 80) {
    return "well done";
  } else {
    return "keep practicing";
  }
}
