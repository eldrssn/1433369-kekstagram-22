import { renderPictures } from './render.js'
import { renderBigPicture } from './render-big-picture.js';
import { showAlert } from './util.js';

const getPostsFeed = () => {
  return fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      renderPictures(data);
      renderBigPicture(data);
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
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });

}
export { getPostsFeed, sendData };

/*
const renderOnSuccess = (data) => {
  renderPictures(data);
  renderBigPicture(data);
}


  return fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })

    .catch((err) => {
      onError(err);
    });
}

getPostsFeed(renderOnSuccess, console.log())
*/
