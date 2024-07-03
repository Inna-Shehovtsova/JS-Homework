//-----------------------------------------
// Homework 9

/** Даны длины трёх сторон треугольника. Определить,"
 * является ли треугольник прямоугольным.
 * @param {*} input массив длин сторон[5, 4,3]
 * @returns
 */
export function checkTriangle(input) {
  const aS = input.slice();
  aS.sort((a1, b1) => a1 - b1);
  if (aS[0] * aS[0] + aS[1] * aS[1] === aS[2] * aS[2]) {
    return true;
  }
  return false;
}
/**
 *  выведет  длину окружности и площадь круга с радиусом R.
 * @param {*} R
 * @returns {lengh:cirLen, sqr:cirSqr}
 */
export function circleParam(R) {
  const cirLen = R * 2 * Math.PI;
  const cirSqr = R * R * Math.PI;
  return { lengh: cirLen, sqr: cirSqr };
}
