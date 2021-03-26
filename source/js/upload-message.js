const main = document.querySelector('main');
const body = document.body;

const successMessage = document.querySelector('#success')
  .content
  .querySelector('.success')
  .cloneNode(true);
const successMessageCloseButton = successMessage.querySelector('.success__button');

const errorMessage = document.querySelector('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);
const errorMessageCloseButton = errorMessage.querySelector('.error__button');

const closeSuccessModal = () => {
  main.removeChild(successMessage);
  body.removeEventListener('click', onSuccessBodyClick);
}

const closeErrorModal = () => {
  main.removeChild(errorMessage);
  body.removeEventListener('click', onErrorBodyClick);
}

const onEscKeydown = (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    closeSuccessModal();
  }
}

const onSuccessBodyClick = (evt) => {
  if (evt.target.className === 'success') {
    closeSuccessModal();
  }
}

const onErrorBodyClick = (evt) => {
  if (evt.target.className === 'error') {
    closeSuccessModal();
  }
}

const showSuccessModal = () => {
  main.appendChild(successMessage);
  successMessageCloseButton.addEventListener('click', closeSuccessModal);
  successMessageCloseButton.addEventListener('keydown', onEscKeydown);
  body.addEventListener('click', onSuccessBodyClick);
}

const showErrorModal = () => {
  main.appendChild(errorMessage);
  errorMessageCloseButton.addEventListener('click', closeErrorModal);
  errorMessageCloseButton.addEventListener('keydown', onEscKeydown);
  body.addEventListener('click', onErrorBodyClick);
}

export { showSuccessModal, showErrorModal };
