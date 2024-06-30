import { dayOfWeek, minitFromMidnight, getYounger } from "./hw8_functions";

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
