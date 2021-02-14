
//  Функция, возвращающая случайное целое
//  число из переданного диапазона включительно
const getRandomNumber = function (min, max) {
  if (min < 0 || max < 0) {
    return 'Числа не могут быть отрицательные';
  } else if (max <= min) {
    return 'Первое число должно быть меньше второго';
  }

  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

// Функция для проверки максимальной длины строки.
const checkStringLength = (string, maxLength) => {
  return (string.length <= maxLength) ? true : false;
}

checkStringLength('Строка для проверки длины', 140);

// Функция, для заполнения массива случайными числами
// без повторения, в указанном диапазоне
const fillArrayRandom = (arr, min, max) => {
  let temp;
  while (arr.length < max) {
    temp = getRandomNumber(min, max);
    if (!arr.includes(temp)) {
      arr.push(temp);
    }
  }
}

// Функция для возвращение полученного случайного
// числа из конца массива
const getNumber = (arr) => arr.pop();

// Функция поиска случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
}

export { getRandomNumber, fillArrayRandom, getNumber, getRandomArrayElement };
