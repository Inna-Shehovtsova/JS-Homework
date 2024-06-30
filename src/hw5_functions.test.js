import { arrElSum, doubleArr, arrMinMax } from "./hw5_functions";

describe("сумму всех элементов массива", () => {
  it("сумму всех элементов массива []", () => {
    const s = [];
    expect(arrElSum(s)).toEqual(0);
  });
  it("сумму всех элементов массива [1]", () => {
    expect(arrElSum([1])).toEqual(1);
  });
  it("сумму всех элементов массива [1, 3]", () => {
    expect(arrElSum([1, 3])).toEqual(4);
  });
});

describe("каждый элемент будет вдвое больше", () => {
  it(" массив []", () => {
    const s = [];
    expect(doubleArr(s)).toStrictEqual([]);
  });
  it(" массив [1]", () => {
    expect(doubleArr([1])).toStrictEqual([2]);
  });
  it(" массив [1, 3]", () => {
    expect(doubleArr([1, 3])).toStrictEqual([2, 6]);
  });
});

describe("Найдите наибольший и наименьший элементы массива", () => {
  it(" массив []", () => {
    const s = [];
    expect(arrMinMax(s)).toStrictEqual({ min: undefined, max: undefined });
  });
  it(" массив [1]", () => {
    expect(arrMinMax([1])).toStrictEqual({ min: 1, max: 1 });
  });
  it(" массив [1, 3]", () => {
    expect(arrMinMax([1, 3])).toStrictEqual({ min: 1, max: 3 });
  });
});
