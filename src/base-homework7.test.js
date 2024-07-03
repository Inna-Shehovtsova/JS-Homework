import { createUI } from "./base-homework7";

describe("Кнопка появляется", () => {
  const divApp = document.createElement("div");
  beforeEach(() => {
    createUI(divApp);
  });

  it("to button appear", () => {
    expect(divApp.querySelector(".add-paragraph")).toBeTruthy();
    expect(divApp.querySelector(".input-text")).toBeTruthy();

    const button = divApp.querySelector(".add-paragraph");
    expect(button.hidden).toBeTruthy();

    const input = divApp.querySelector(".input-text");
    input.value = "some text";
    expect(input.value).toBe("some text");
    input.dispatchEvent(new KeyboardEvent("input"));
    // expect(input.value).toBe('A');
    expect(button.hidden).toBeFalsy();
  });
  it("add paragraph", () => {
    divApp.querySelector(".input-text").value = "some text";
    expect(divApp.querySelector(".input-text").value).toBe("some text");
    divApp.querySelector(".add-paragraph").hidden = false;
    divApp.querySelector(".add-paragraph").click();

    expect(divApp.querySelector(".data p")).toBeTruthy();
    expect(divApp.querySelector(".input-text").value).toBe("");
    divApp.querySelector(".input-text").value = "some text2";
    expect(divApp.querySelector(".data p").innerHTML).toBe("some text");
  });

  it("add paragraph 5", () => {
    divApp.querySelector(".input-text").value = "some text";
    expect(divApp.querySelector(".input-text").value).toBe("some text");
    divApp.querySelector(".add-paragraph").hidden = false;
    divApp.querySelector(".add-paragraph").click();

    divApp.querySelector(".input-text").value = "some text2";
    divApp.querySelector(".add-paragraph").click();
    divApp.querySelector(".input-text").value = "some text3";
    divApp.querySelector(".add-paragraph").click();
    divApp.querySelector(".input-text").value = "some text4";
    divApp.querySelector(".add-paragraph").click();
    divApp.querySelector(".input-text").value = "some text5";
    divApp.querySelector(".add-paragraph").click();
    divApp.querySelector(".input-text").value = "some text6";
    divApp.querySelector(".add-paragraph").click();
    expect([...divApp.querySelectorAll(".data p")].length).toBe(5);
  });
});
