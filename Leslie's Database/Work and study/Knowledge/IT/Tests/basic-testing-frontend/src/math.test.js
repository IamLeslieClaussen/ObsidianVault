import { it, expect } from "vitest";
import { add } from "./math";

it("should summerize all numbers in an array", () => {
 // Arrange
  const numbers = [1, 2, 3, 5]

  // Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult)
});


it('should yield NaN if at least one invalid number is provided', () =>{
  const inputs = ['invalid', 1];

  const result = add(inputs)

  expect(result).toBeNaN();
})

it('should yield a correct sum if an array of numeric strings is provided', () =>{
  const numbers = ['1', '2', '3']

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  
  expect(result).toBe(expectedResult);
})

it('should yield 0 if an empty array is provided', () =>{
  const numbers = []

  const result = add(numbers);

  expect(result).toBe(0);
})

if('It should throw an error if no arguement is provided', () =>{
  
  
  const resultFn = () => {add()}
  expect(resultFn).toThrow();

});