import { postsFeed } from './data.js';

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

// все превью изображений заключим в коллекцию
const smallPictures = smallPicturesContainer.querySelectorAll('a');

// создадим документ-фрагмент, куда будем отрисовывать комментарии
const commentsFragment = document.createDocumentFragment();

// функция закрытия большой фотографии
const closeBigPicture = () => {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  commentContainer.textContent = '';
}

// цикл, который связывает превью фото с отрисовкой большой фотографии
for (let i = 0; i < smallPictures.length; i++) {
  smallPictures[i].addEventListener('click', () => {
    bigPictureContainer.classList.remove('hidden');

    bigPictureContainer.querySelector('.big-picture__img img').src = postsFeed[i].url;
    bigPictureContainer.querySelector('.likes-count').textContent = postsFeed[i].likes;
    bigPictureContainer.querySelector('.comments-count').textContent = postsFeed[i].comments.length;
    bigPictureContainer.querySelector('.social__caption').textContent = postsFeed[i].description;

    postsFeed[i].comments.forEach(({ avatar, message, name }) => {
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
