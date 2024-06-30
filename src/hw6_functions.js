//------------------------------------------------
// Homework 6
/**
 *  diff которая получает в качестве параметров 2
 * числа и возвращает разницу между наибольшим и наименьшим
 * @param {*} a
 * @param {*} b
 * @returns  разницу между наибольшим и наименьшим
 */
export function diff(a, b) {
  return Math.abs(a - b);
}
/**
 * напишите функцию isWord которая принимает на вход текстовую строкую
 * Возвращет true если строка состоит из одного слова, иначе false
 * @param {*} str
 * @returns
 */
export function isWord(str) {
  const res = str.split(" ");
  if (res.length > 1 || str.length < 1) return false;
  return true;
}

/** pow (a,b) - а в степени b
 * @param {a} основание
 * @param {b} степень
 * @returns
 * */
export function pow(a, b) {
  let res = 1;
  for (let i = 0; i < b; i++) {
    res *= a;
  }
  return res;
}
