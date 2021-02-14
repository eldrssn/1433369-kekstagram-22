import { getRandomNumber, fillArrayRandom, getNumber, getRandomArrayElement } from './util.js';

const NAMES = [
  'Иван',
  'Алексей',
  'Коля',
  'Юля',
  'Женя',
  'Катя',
];

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

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!',
];

const POSTS_FEED_COUNT = 25;


const ids = [];
const urlNumbers = [];
const commentIds = [];

fillArrayRandom(ids, 1, 25);
fillArrayRandom(urlNumbers, 1, 25);
fillArrayRandom(commentIds, 1, 300);

// Генерируем случайное количество комментариев (от 1-го до 3-х)
const getOneComment = () => {
  return {
    id: getNumber(commentIds),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENT_MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
}

const getComments = () => {
  const arr = []
  for (let i = 1; i <= getRandomNumber(1, 3); i++) {
    arr.push(getOneComment());
  }
  return arr;
}

// Функция, которая возвращает пост
const createPost = () => {
  return {
    id: getNumber(ids),
    url: `photos/${getNumber(urlNumbers)}.jpg`,
    description: getRandomArrayElement(DECRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: getComments(),
  }
};

// Заполняем массив из постов
const postsFeed = new Array(POSTS_FEED_COUNT).fill({}).map(() => createPost());

export { postsFeed };


