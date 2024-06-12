/* Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения.
2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый из
них удаляется. */
export function buttonAppear(val) {
  const button = document.querySelector(".add-paragraph");
  button.hidden = !val;
}
export function clearInput() {
  const text = document.querySelector(".input-text");
  text.value = "";
  buttonAppear(false);
}
export function removeParagraph() {
  const plist = document.querySelectorAll("p");
  if (plist.length > 5) {
    plist[0].remove();
  }
}
export function buttonClick() {
  const text = document.querySelector(".input-text");
  const par = document.createElement("p");

  par.innerText = text.value;
  const data = document.querySelector(".data");
  data.append(par);
  clearInput();
  removeParagraph();
}
export function checkInput() {
  const text = document.querySelector(".input-text");
  if (text.value.length > 0) {
    buttonAppear(true);
  } else {
    buttonAppear(false);
  }
}
