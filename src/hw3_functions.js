//------------------------------------------------
// Homework 3
/** сумма всех целых чисел от 50 до 100
 */
export function sumFromAToB(a, b) {
  let sum1 = 0;
  for (let i = a; i <= b; i += 1) {
    sum1 += i;
  }
  return sum1;
}
/** таблица умножения на 7
 * */
export function mul7Show() {
  let ret = "";
  for (let i = 1; i < 10; i += 1) {
    ret += `7 x ${i} = ${i * 7} \n`;
  }
  return ret;
}
/** среднее арифметическое всех нечётных чисел от 1 до N.
 * @param {N} До какого числа складывать
 */
export function avgSumOdd(N) {
  let sum2 = 0;
  let count = 0;

  for (let i = 1; i <= N; i += 2) {
    sum2 = i + sum2;
    count += 1;
  }
  return sum2 / count;
}
