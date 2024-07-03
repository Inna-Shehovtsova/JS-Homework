/* Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения.
2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый из
них удаляется. */

export function createUI(el) {
  el.innerHTML = `<div class="data"></div><input type="text" 
  class='input-text' "/><button class="add-paragraph"  
  hidden = 'true'>Добавить</button>`;
  const input = el.querySelector(".input-text");
  const btn = el.querySelector(".add-paragraph");
  input.addEventListener("input", () => {
    if (input.value.length > 0) {
      btn.hidden = false;
    } else {
      btn.hidden = true;
    }
  });
  btn.addEventListener("click", () => {
    const par = document.createElement("p");
    par.innerHTML = input.value;
    const data = el.querySelector(".data");
    data.append(par);
    input.value = "";
    const plist = el.querySelectorAll(".data p");
    if (plist.length > 5) {
      plist[0].remove();
    }
  });
}
