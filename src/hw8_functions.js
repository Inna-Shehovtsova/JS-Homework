//-----------------------------------------
// Homework 8
function parseDateFromDDMMYYYY(str) {
  const [day, month, year] = str.split(".");
  return new Date(year, month - 1, day);
}
/**
 * Из даты в формате ДД.ММ.ГГГГ вывести день
 * недели по введённой дате.
 * @param {*} userdate
 * @returns
 */
export function dayOfWeek(userdate) {
  const date = parseDateFromDDMMYYYY(userdate);
  const weekArr = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return weekArr[date.getDay()];
}

//-----------------------------------------

/**
 * количество минут, прошедшее с начала сегодняшнего дня.
 * Или с введенной даты
 * @returns
 */
export function minitFromMidnight(now = new Date()) {
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const differ = Math.trunc((now - midnight) / 60000);
  return differ;
}

//-----------------------------------------

/**
 * определяет более молодого пользователя
 * @param {*} user1  датa рождения  ДД.ММ.ГГГГ
 * @param {*} user2 датa рождения  ДД.ММ.ГГГГ
 * @returns
 */
export function getYounger(user1, user2) {
  const date1 = parseDateFromDDMMYYYY(user1);
  const date2 = parseDateFromDDMMYYYY(user2);

  if (date1 - date2 > 0) {
    return `first is younger`;
  }
  if (date1 - date2 < 0) {
    return `second is younger`;
  }
  return `first and second are same age`;
}
