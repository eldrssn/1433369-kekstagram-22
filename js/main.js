//  1. Функция, возвращающая случайное целое
//  число из переданного диапазона включительно

//  При решении опирался на теорию отсюда:
//  https://learn.javascript.ru/task/random-int-min-max

const getRandomNumber = function (min, max) {

  // Делаем проверку на положительный диапазон
  // и далее на то, что второй агрумент больше, чем первый

  if (min < 0 || max < 0) {
    return 'Числа не могут быть отрицательные';
  } else if (max <= min) {
    return 'Первое число должно быть меньше второго';
  }

  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

getRandomNumber(0, 50);

// 2. Функция для проверки максимальной длины строки.

const checkStringLength = (string, maxLength) => {
  return (string.length <= maxLength) ? true : false;
}

checkStringLength('Строка для проверки длинны', 140);
