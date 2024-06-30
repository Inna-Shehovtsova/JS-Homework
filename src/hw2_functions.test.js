import { maximum, mothFromIndex, squareInSircle } from "./hw2_functions";

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
