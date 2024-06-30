import { buttonAppear } from "./base-homework7";

describe("Кнопка появляется", () => {
  it("to be function", () => {
    expect(buttonAppear).toBeInstanceOf(Function);
  });
});
