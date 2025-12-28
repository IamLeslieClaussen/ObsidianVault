import { describe, it, expect } from "vitest";
import {
  calculatePercentage,
  isAnswerCorrect,
  getResultMessage,
} from "./quizUtils";

describe("calculatePercentage", () => {
  it("returns the correct percentage", () => {
    //Arrange
    const score = 3;
    const total = 5;

    //Act
    const result = calculatePercentage(score, total);

    //Assert
    expect(result).toBe(60);
  });
});

describe("isAnswerCorrect", () => {
  it("returns true for correct answer", () => {
    //Arrange
    const answers = [
      { text: "A", correct: false },
      { text: "B", correct: true },
    ];

    //Act
    const result = isAnswerCorrect("B", answers);

    //Assert
    expect(result).toBe(true);
  });
});

describe("getResultMessage", () => {
  it("returns 'great job' for 100%", () => {
    //Arrange and Act

    const result = getResultMessage(100);

    //Assert
    expect(result).toBe("great job");
  });
});
