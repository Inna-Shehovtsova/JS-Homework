import { checkTriangle, circleParam } from "./hw9_functions";

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
