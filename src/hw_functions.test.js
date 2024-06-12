import {
  sum,
  mul,
  strLengthSum,
  maximum,
  mothFromIndex,
  squareInSircle,
  sumFromAToB,
  mul7Show,
  avgSumOdd,
  arrElSum,
  doubleArr,
  arrMinMax,
  diff,
  isWord,
  pow,
  dayOfWeek,
  minitFromMidnight,
  getYounger,
  checkTriangle,
  circleParam,
} from "./hw_functions";

describe("Sum", () => {
  it("return sum of two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
  it("return sum of two numbers", () => {
    expect(sum(-1, 0)).toEqual(-1);
  });
  it("return sum of two numbers", () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it("return sum of two numbers", () => {
    expect(sum(-2, 2)).toEqual(0);
  });
});

describe("Mul", () => {
  it("return multiple of two numbers", () => {
    expect(mul(1, 2)).toEqual(2);
  });
  it("return multiple of two numbers", () => {
    expect(mul(-1, 0)).toEqual(-0);
  });
  it("return multiple of two numbers", () => {
    expect(mul(1, 0)).toEqual(0);
  });
  it("return multiple of two numbers", () => {
    expect(mul(0, 0)).toEqual(0);
  });
  it("return multiple of two numbers", () => {
    expect(mul(-2, 2)).toEqual(-4);
  });
});

describe("Sum two strings length", () => {
  it("return sum of str len", () => {
    expect(strLengthSum("", "")).toEqual(0);
  });
  it("return sum of str len", () => {
    expect(strLengthSum("a", "")).toEqual(1);
  });
  it("return sum of str len", () => {
    expect(strLengthSum("a", "b")).toEqual(2);
  });
  it("return sum of str len", () => {
    expect(strLengthSum("test", "test case")).toEqual(13);
  });
});

describe("maximum", () => {
  it("return max of two numbers", () => {
    expect(maximum(1, 2)).toEqual(2);
  });
  it("return max of two numbers", () => {
    expect(maximum(-1, 0)).toEqual(0);
  });
  it("return max of two numbers", () => {
    expect(maximum(1, 0)).toEqual(1);
  });
  it("return max of two numbers", () => {
    expect(maximum(110, 110)).toEqual(110);
  });
  it("return max of two numbers", () => {
    expect(maximum(2, -2)).toEqual(2);
  });
});

describe("Name of Month", () => {
  it("return month name from index 1", () => {
    expect(mothFromIndex(1)).toEqual("January");
  });
  it("return month name from index 12", () => {
    expect(mothFromIndex(12)).toEqual("December");
  });
  it("return month name from index 0", () => {
    expect(() => {
      mothFromIndex(0);
    }).toThrow(Error);
  });
  it("return month name from index 110", () => {
    expect(() => {
      mothFromIndex(110);
    }).toThrow("Month index must be in 1-12!");
  });
  it("return month name from index 13", () => {
    expect(() => {
      mothFromIndex(13);
    }).toThrow(new Error("Month index must be in 1-12!"));
  });
});

describe("Can square to be in circle", () => {
  it("return if sircle 1 can be in square 10", () => {
    expect(squareInSircle(10, 1)).toBeTruthy();
  });
  it("return if sircle 10 can be in square 1", () => {
    expect(squareInSircle(1, 10)).toBeFalsy();
  });
  it("return if sircle 5  can be in square 4", () => {
    expect(squareInSircle(4, 5)).toBeTruthy();
  });
});

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

describe("diff возвращает разницу между наибольшим и наименьшим", () => {
  it("diff 1, 1", () => {
    expect(diff(1, 1)).toEqual(0);
  });
  it("diff 0 , 0 ", () => {
    expect(diff(0, 0)).toEqual(0);
  });
  it("diff 1 , 2", () => {
    expect(diff(1, 2)).toEqual(1);
  });
  it("diff 0 , 10", () => {
    expect(diff(0, 10)).toEqual(10);
  });
  it("diff 2 , -2", () => {
    expect(diff(2, -2)).toEqual(4);
  });
});

describe("isWord true если строка состоит из одного слова,false", () => {
  it("isWord ''", () => {
    expect(isWord("")).toBeFalsy();
  });
  it("isWord 'a' ", () => {
    expect(isWord("a")).toBeTruthy();
  });
  it("isWord 'absad'", () => {
    expect(isWord("absad")).toBeTruthy();
  });
  it("isWord 'a a'", () => {
    expect(isWord("a a")).toBeFalsy();
  });
  it("isWord '2 , -2'", () => {
    expect(isWord("2 , -2")).toBeFalsy();
  });
});

describe(" pow (a,b) - а в степени b", () => {
  it("pow 1, 0", () => {
    expect(pow(1, 0)).toEqual(1);
  });
  it("pow 2, 1", () => {
    expect(pow(2, 1)).toEqual(2);
  });
  it("pow 2, 2", () => {
    expect(pow(2, 2)).toEqual(4);
  });

  it("pow 2, 4", () => {
    expect(pow(2, 4)).toEqual(16);
  });
});

describe("День недели по дате", () => {
  it("to be function", () => {
    expect(dayOfWeek).toBeInstanceOf(Function);
  });
  it("12.06.2024", () => {
    expect(dayOfWeek("12.06.2024")).toEqual("Среда");
  });
  it("1.01.2024", () => {
    expect(dayOfWeek("1.01.2024")).toEqual("Понедельник");
  });
  it("5.05.2024", () => {
    expect(dayOfWeek("5.05.2024")).toEqual("Воскресенье");
  });

  it("13.05.2023", () => {
    expect(dayOfWeek("13.05.2023")).toEqual("Суббота");
  });
});

describe("количество минут, прошедшее с начала введенного дня", () => {
  it("to be function", () => {
    expect(minitFromMidnight).toBeInstanceOf(Function);
  });
  it("12.06.2024", () => {
    expect(minitFromMidnight(new Date(2024, 5, 12))).toEqual(0);
  });
  it("1.01.2024 01:00", () => {
    expect(minitFromMidnight(new Date(2024, 0, 1, 1, 0))).toEqual(60);
  });
  it("5.05.2023 12:30", () => {
    expect(minitFromMidnight(new Date(2023, 4, 5, 12, 30))).toEqual(750);
  });

  it("13.05.2023 23:59:59", () => {
    expect(minitFromMidnight(new Date(2023, 4, 13, 23, 59, 59))).toEqual(1439);
  });
});
describe("определяет более молодого пользователя", () => {
  it("to be function", () => {
    expect(getYounger).toBeInstanceOf(Function);
  });
  it("12.06.2020, 12.06.2024", () => {
    expect(getYounger("12.06.2020", "12.06.2024")).toEqual(`second is younger`);
  });
  it("1.01.1990 5.02.1980", () => {
    expect(getYounger("1.01.1990", "5.02.1980")).toEqual(`first is younger`);
  });

  it("5.05.2023  5.05.2023", () => {
    expect(getYounger("5.05.2023", "5.05.2023")).toEqual(
      `first and second are same age`,
    );
  });
});

describe("является ли треугольник прямоугольным", () => {
  it("to be function", () => {
    expect(checkTriangle).toBeInstanceOf(Function);
  });
  it("[5, 4,3]", () => {
    expect(checkTriangle([5, 4, 3])).toBeTruthy();
  });
  it("[5, 12, 2]", () => {
    expect(checkTriangle([5, 12, 2])).toBeFalsy();
  });
});
describe("длину окружности и площадь круга с радиусом R", () => {
  it("to be function", () => {
    expect(circleParam).toBeInstanceOf(Function);
  });
  it("R 0", () => {
    expect(circleParam(0)).toStrictEqual({ lengh: 0, sqr: 0 });
  });
  it("R 1", () => {
    expect(circleParam(1)).toStrictEqual({
      lengh: 1 * 2 * Math.PI,
      sqr: Math.PI,
    });
  });
  it("R 12", () => {
    expect(circleParam(12)).toStrictEqual({
      lengh: 12 * 2 * Math.PI,
      sqr: 12 * 12 * Math.PI,
    });
  });
});
