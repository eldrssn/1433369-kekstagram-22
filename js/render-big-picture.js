const MIN_COMMENTS_COUNT = 5;

let displayCommentsCount = MIN_COMMENTS_COUNT;

// находим DOM-элементы
const body = document.body;
const smallPicturesContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const commentCounter = bigPictureContainer.querySelector('.social__comment-count');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel')
const commentContainer = bigPictureContainer.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');


// создадим документ-фрагмент, куда будем отрисовывать комментарии
const commentsFragment = document.createDocumentFragment();

// функция закрытия большой фотографии
const onCloseButtonClick = () => {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  commentContainer.textContent = '';
  displayCommentsCount = MIN_COMMENTS_COUNT;
  // console.log('закрыто ' + displayCommentsCount);
}


const clearComments = () => {
  const renderedComments = bigPictureContainer.querySelectorAll('.social__comment');
  renderedComments.forEach((el) => {
    commentContainer.removeChild(el);
  });
}

const addComments = (obj) => {
  clearComments();
  displayCommentsCount += MIN_COMMENTS_COUNT;
  renderComments(obj);
  // console.log('при клике ' + displayCommentsCount);
}

const showCommentsCounter = (obj) => {
  if (obj.comments.length > 0) {
    commentCounter.innerHTML = `${commentContainer.children.length} из <span class="comments-count">${obj.comments.length}</span> комментариев`;
  }
}

const renderComments = (obj) => {

  const onCommentsLoaderClick = () => addComments(obj);

  const showCommentsLoader = (obj) => {
    if (displayCommentsCount <= obj.comments.length) {
      commentsLoader.classList.remove('hidden');
      commentsLoader.addEventListener('click', onCommentsLoaderClick);
    } else {
      commentsLoader.classList.add('hidden');
      commentsLoader.removeEventListener('click', onCommentsLoaderClick);
    }
  }

  obj.comments
    .slice(0, displayCommentsCount)
    .forEach(({ avatar, message, name }) => {
      const newComment = commentTemplate.cloneNode(true);
      newComment.querySelector('.social__picture').src = avatar;
      newComment.querySelector('.social__picture').alt = name;
      newComment.querySelector('.social__text').textContent = message;
      commentsFragment.appendChild(newComment);
    })
  commentContainer.appendChild(commentsFragment);
  // console.log('при рендере ' + displayCommentsCount)


  showCommentsCounter(obj);
  showCommentsLoader(obj);
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

      renderComments(data[i]);

      body.classList.add('modal-open');

      closeButton.addEventListener('click', onCloseButtonClick)

      document.addEventListener('keydown', (evt) => {
        if (evt.key === ('Escape' || 'Esc')) {
          onCloseButtonClick();
        }
      })
    })
  }
}

export { renderBigPicture };
