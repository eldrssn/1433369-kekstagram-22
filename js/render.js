import { renderBigPicture } from './render-big-picture.js';

// находим DOM-элемент для вставки изображение
const picturesContainer = document.querySelector('.pictures');

// находим шаблон
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

// создаем документ-фрагмент
const pictureMiniaturesFragment = document.createDocumentFragment();

const clearPictures = () => {
  const pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((el) => {
    picturesContainer.removeChild(el);
  })
}

// заполняем документ фрагмент временными данными
const renderPictures = (data) => {
  data.forEach(({ url, likes, comments }) => {
    const pictureMiniature = pictureTemplate.cloneNode(true);
    pictureMiniature.querySelector('.picture__img').src = url;
    pictureMiniature.querySelector('.picture__likes').textContent = likes;
    pictureMiniature.querySelector('.picture__comments').textContent = comments.length;
    pictureMiniaturesFragment.appendChild(pictureMiniature);
  });

  // отрисовываем на странице
  picturesContainer.appendChild(pictureMiniaturesFragment);

  renderBigPicture(data);
}

export { renderPictures, clearPictures };

