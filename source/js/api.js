import { renderPictures } from './render.js'
import { showAlert } from './util.js';
import { createFilter, setFilter } from './filter.js';

const FETCH_GET_URL = 'https://23.javascript.pages.academy/kekstagram/data';
const FETCH_POST_URL = 'https://23.javascript.pages.academy/kekstagram';

const getPostsFeed = () => {
  return fetch(FETCH_GET_URL)
    .then((response) => response.json())
    .then((data) => {
      renderPictures(data);
      createFilter(data);
      setFilter(data);
    })
    .catch(() => {
      showAlert('Ошибка загрузки изображений');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    FETCH_POST_URL,
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
