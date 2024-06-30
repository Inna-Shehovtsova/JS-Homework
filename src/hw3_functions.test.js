import { sumFromAToB, mul7Show, avgSumOdd } from "./hw3_functions";

describe("сумма всех целых чисел от A до B", () => {
  it("return sum from 50 to 100 ", () => {
    expect(sumFromAToB(50, 100)).toEqual(3825);
  });
  it("return sum from 0 to 0 ", () => {
    expect(sumFromAToB(0, 0)).toEqual(0);
  });
  it("return sum from 0 to 1 ", () => {
    expect(sumFromAToB(0, 1)).toEqual(1);
  });
  it("return sum from 1 to 3", () => {
    expect(sumFromAToB(1, 3)).toEqual(6);
  });
});

describe("среднее арифметическое всех нечётных чисел от 1 до N.", () => {
  it("return sum from 0 to 1 ", () => {
    expect(avgSumOdd(1)).toEqual(1);
  });
  it("return sum from 0 to 2", () => {
    expect(avgSumOdd(2)).toEqual(1);
  });
  it("return sum from 0 to 3 ", () => {
    expect(avgSumOdd(3)).toEqual(2);
  });
  it("return sum from 0 to 10 ", () => {
    expect(avgSumOdd(10)).toEqual(5);
  });
});

describe("таблица умножения на 7", () => {
  it("таблица умножения на 7", () => {
    expect(mul7Show()).toMatch(/7 x 1 = 7/);
  });
});
