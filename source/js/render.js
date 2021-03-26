import { renderBigPicture } from './render-big-picture.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const pictureMiniaturesFragment = document.createDocumentFragment();

const clearPictures = () => {
  const pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((el) => {
    picturesContainer.removeChild(el);
  })
}

const renderPictures = (data) => {
  data.forEach(({ url, likes, comments }) => {
    const pictureMiniature = pictureTemplate.cloneNode(true);
    pictureMiniature.querySelector('.picture__img').src = url;
    pictureMiniature.querySelector('.picture__likes').textContent = likes;
    pictureMiniature.querySelector('.picture__comments').textContent = comments.length;
    pictureMiniaturesFragment.appendChild(pictureMiniature);
  });
  picturesContainer.appendChild(pictureMiniaturesFragment);

  renderBigPicture(data);
}

export { renderPictures, clearPictures };

