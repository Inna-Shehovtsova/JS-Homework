import { diff, isWord, pow } from "./hw6_functions";

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
