//------------------------------------------------
// Homework 5

/**
 * сумму всех элементов массива
 * @param {arr} массив
 * @returns {sum}
 */
export function arrElSum(arr) {
  return arr.reduce((s, it) => s + it, 0);
}
/** новый массив на основе исходного, в
 * котором каждый элемент будет вдвое больше
 * (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
 * массив
 *  @param {arr} массив
 *  @returns {arr2}
 */
export function doubleArr(arr) {
  let arr2 = [].concat(arr);
  arr2 = arr2.map((el) => {
    const newVal = el * 2;
    return newVal;
  });
  return arr2;
}
/**
 * Найдите наибольший и наименьший элементы массива
 * @param arr массив
 * @returns   {'min':min, 'max':max}
 */
export function arrMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  arr.forEach((el) => {
    if (el < min) {
      min = el;
    }
    if (el > max) {
      max = el;
    }
  });
  return { min, max };
}
