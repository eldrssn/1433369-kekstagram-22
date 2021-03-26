import { renderPictures } from './render.js'
import { showAlert } from './util.js';
import { createFilter, filter } from './filter.js';

const getPostsFeed = () => {
  return fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      renderPictures(data);
      createFilter(data);
      filter(data);
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
