const ALERT_SHOW_TIME = 5000;

const getRandomNumber = function (min, max) {
  if (min < 0 || max < 0) {
    return 'Числа не могут быть отрицательные';
  } else if (max <= min) {
    return 'Первое число должно быть меньше второго';
  }

  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

const fillArrayRandom = (arr, min, max) => {
  let temp;
  while (arr.length < max) {
    temp = getRandomNumber(min, max);
    if (!arr.includes(temp)) {
      arr.push(temp);
    }
  }
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export { getRandomNumber, fillArrayRandom, showAlert };
