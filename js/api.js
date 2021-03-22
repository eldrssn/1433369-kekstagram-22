import { renderPictures } from './render.js'
import { renderBigPicture } from './render-big-picture.js';
import { showAlert } from './util.js';
// import { setFilter } from './filter.js';

const getPostsFeed = () => {
  return fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      renderPictures(data);
      renderBigPicture(data);
      // setFilter();
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
    .then((/*response*/) => {
      /*
      тут странное поведение в консоли
      если расскоментить этот код, то в консоли будет видно, что при повторной отправке изображения
      сначала вылезет ошибка 400, но затем запрос успешно отправиться на сервер
      не понял, что здесь поменял, но все таки этот код заработал

      if (response.ok) {
        console.log(response);
      } else {
        console.log('ошибка');
      }*/
      onSuccess();
    })
    .catch(() => {
      onFail();
    });

}
export { getPostsFeed, sendData };
