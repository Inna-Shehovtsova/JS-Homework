//------------------------------------------------
// Homework 1

export function sum(a, b) {
  return a + b;
}
export function mul(a, b) {
  return a * b;
}
export function strLengthSum(str1, str2) {
  return str1.length + str2.length;
}
//------------------------------------------------
// Homework 2
export function maximum(a, b) {
  return a > b ? a : b;
}
/** 2.Запросить у пользователя ввод числа от 1 до 12.
 * Вывести в консоль название месяца, соответствующее
 * этому числу (1 — январь, 2 — февраль и т.д.).
 * @param {index} индекс месяца  от 1 до 12.
 */
export function mothFromIndex(index) {
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

//------------------------------------------------
// Homework 5
/**
 *  diff которая получает в качестве параметров 2
 * числа и возвращает разницу между наибольшим и наименьшим
 * @param {*} a
 * @param {*} b
 * @returns  разницу между наибольшим и наименьшим
 */
export function diff(a, b) {
  return a > b ? a - b : b - a;
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
  } if (date1 - date2 < 0) {
    return `second is younger`;
  } 
    return `first and second are same age`;
  
}

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
