//------------------------------------------------
// Homework 2
export function maximum(a, b) {
  return a > b ? a : b;
}
/** 2.Запросить у пользователя ввод числа от 1 до 12.
 * Вывести в консоль название месяца, соответствующее
 * этому числу (1 — январь, 2 — февраль и т.д.).
 * @param {i} индекс месяца  от 1 до 12.
 */
export function mothFromIndex(i = -1) {
  let index = i;
  if (index === -1) {
    index = prompt("Input month number from 1 to 12");
  }
  let month = "";
  switch (index) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "Match";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
    default:
      throw new Error("Month index must be in 1-12!");
  }
  return month;
}

/** В переменных circle и square хранятся площади круга
 * и квадрата соответственно. Написать программу,
 * которая определяет, поместится ли круг в квадрат.
 * @param {square} площадь квадрата
 * @param {circle} площадь круга
 */
export function squareInSircle(square, circle) {
  const squareSide = Math.sqrt(square);
  const circleDiameter = circle / Math.PI;

  if (circleDiameter < squareSide) {
    return true;
  }
  return false;
}
