//import { postsFeed } from './data.js';

// находим DOM-элементы
const body = document.body;
const smallPicturesContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const commentCount = bigPictureContainer.querySelector('.social__comment-count');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel')
const commentContainer = bigPictureContainer.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');


// создадим документ-фрагмент, куда будем отрисовывать комментарии
const commentsFragment = document.createDocumentFragment();

// функция закрытия большой фотографии
const closeBigPicture = () => {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  commentContainer.textContent = '';
}

// цикл, который связывает превью фото с отрисовкой большой фотографии
const renderBigPicture = (data) => {
  // все превью изображений заключим в коллекцию
  const smallPictures = smallPicturesContainer.querySelectorAll('a');

  for (let i = 0; i < smallPictures.length; i++) {
    smallPictures[i].addEventListener('click', () => {

      bigPictureContainer.classList.remove('hidden');

      bigPictureContainer.querySelector('.big-picture__img img').src = data[i].url;
      bigPictureContainer.querySelector('.big-picture__img img').alt = data[i].description;
      bigPictureContainer.querySelector('.likes-count').textContent = data[i].likes;
      bigPictureContainer.querySelector('.comments-count').textContent = data[i].comments.length;
      bigPictureContainer.querySelector('.social__caption').textContent = data[i].description;

      data[i].comments.forEach(({ avatar, message, name }) => {
        const newComment = commentTemplate.cloneNode(true);
        newComment.querySelector('.social__picture').src = avatar;
        newComment.querySelector('.social__picture').alt = name;
        newComment.querySelector('.social__text').textContent = message;
        commentsFragment.appendChild(newComment);
      })
      commentContainer.appendChild(commentsFragment);

      body.classList.add('modal-open');
      commentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');

      closeButton.addEventListener('click', () => {
        closeBigPicture()
      })

      document.addEventListener('keydown', (evt) => {
        if (evt.key === ('Escape' || 'Esc')) {
          closeBigPicture();
        }
      })
    })
  }
}

export { renderBigPicture };
