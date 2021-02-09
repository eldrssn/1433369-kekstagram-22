'use strict'
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

checkStringLength('Строка для проверки длины', 140);


//ЗАДАНИЕ 3. БОЛЬШЕ ДЕТАЛЕЙ

// Создаем массив имен
const NAMES = [
  'Иван',
  'Алексей',
  'Коля',
  'Юля',
  'Женя',
  'Катя',
];

// Создаем массив описаний к фотографиям
// где описание фотографии будет соответвовать id - 1
const DECRIPTIONS = [
  'Вот тут как-то мы отдыхали!',
  'Идем на пляж',
  'Вот это вид!',
  'Моя девочка',
  'Когда любишь вкусно покушать',
  'Суперкар',
  'Только с грядки',
  'ммм, вкуснятина',
  'Добрый вечер, я диспетчер',
  'Комфорт и удобство',
  'Красота то какая',
  'Тачка друга',
  'Здоровое питание',
  'Некушай котика, нинада',
  'Тапки мечты',
  'вот это красота!',
  'Сходили на концерт',
  'Раритет',
  'Купили для бабушки, она в восторге!',
  'Ночью город только красивее',
  'Еда в ресторане',
  'Закат ты мой закат',
  'Крабик',
  'Скучаем по былым временам до ковида',
  'И такое бывает, ага',
];

// Создаем массив комментариев, которые нам даны в задании
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!',
];

// определим в константу количество постов, которые мы должны получить
const POSTS_FEED_COUNT = 25;

// Получим id поста и id пользователя
// в задании указаны два id - чтобы не путаться ниже объявим их
// как postId и commentId

// создаем пустые массивы для
// id постов, id юзеров и id комментариев
const postsIds = [];
const usersIds = [];
const commentsId = [];

// функция, для заполнения массива случайными числами
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

// заполним массив usersIds, postsId и commentId
fillArrayRandom(usersIds, 1, 6);
fillArrayRandom(postsIds, 1, 25);
// в задании не указано количество возможных комментариев
// предположим, что на данный момент их может быть максимум 300
fillArrayRandom(commentsId, 1, 300);

// функция для возвращение полученного случайного
// числа из конца массива
const getId = (arr) => arr.pop();

// функция поиска случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
}

// генерируем случайное количество комментариев (от 1-го до 3-х)
// определим блок комментария в объект:

const getOneComment = () => {
  return {
    commentId: getId(commentsId),  //
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`, //getRandomNumber
    message: getRandomArrayElement(COMMENT_MESSAGES), //getRandomComment
    name: getRandomArrayElement(NAMES), // getRandomCommetsName
  }
}

const getComments = () => {
  const arr = []
  for (let i = 1; i <= getRandomNumber(1, 3); i++) {
    arr.push(getOneComment());
  }
  return arr;
}

// функция, которая возвращает пост
const createPost = () => {
  return {
    postId: getId(postsIds),
    userId: getId(usersIds),
    name: getRandomArrayElement(NAMES),
    likes: getRandomNumber(15, 200),
    comments: getComments(),

    // нам нужно связать postId c url и description, поэтому возмользуемся
    // методами и контекстом this
    url() {
      return `photos/${this.postId}.jpg`;
    },

    description() {
      return DECRIPTIONS[this.postId - 1];
    },
  }
};

// заполняем массив из постов
const postsFeed = new Array(POSTS_FEED_COUNT).fill({}).map(() => createPost());

postsFeed; // использую переменную, иначе esliner ругается

// console.log(postsFeed);
// console.log(postsFeed[5].url());
// console.log(postsFeed[20].description());
