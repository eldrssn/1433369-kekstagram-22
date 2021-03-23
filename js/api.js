/* global _:readonly */
import { renderPictures, clearPictures } from './render.js'
import { showAlert } from './util.js';
import { createFilter, setDefaultClick, setRandomClick, setDiscussedClick } from './filter.js';

const RENDER_DELAY = 500;
const RANDOM_PHOTO_COUNT = 10;

const getPostsFeed = () => {
  return fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      createFilter();
      renderPictures(data);
      setDefaultClick(_.debounce(
        () => {
          clearPictures();
          renderPictures(data);
        }, RENDER_DELAY));
      setRandomClick(_.debounce(
        () => {
          clearPictures();
          renderPictures(data
            .slice()
            .sort(() => 0.5 - Math.random())
            .slice(0, RANDOM_PHOTO_COUNT));
        }, RENDER_DELAY));
      setDiscussedClick(_.debounce(
        () => {
          clearPictures();
          renderPictures(data
            .slice()
            .sort((a, b) => b.comments.length - a.comments.length));
        }, RENDER_DELAY));
    })
    .catch(() => {
      showAlert('Ошибка загрузки изображений');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then(() => {
      onSuccess();
    })
    .catch(() => {
      onFail();
    });

}
export { getPostsFeed, sendData };
