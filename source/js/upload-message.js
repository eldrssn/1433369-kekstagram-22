import { isEscape } from './util.js';

const main = document.querySelector('main');

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
  document.removeEventListener('click', onSuccessDocumentClick);
  document.removeEventListener('keydown', onSuccessDocumentEscKeydown);
}

const closeErrorModal = () => {
  main.removeChild(errorMessage);
  document.removeEventListener('click', onErrorDocumentClick);
  document.removeEventListener('keydown', onErrorDocumentEscKeydown);
}

const onSuccessDocumentEscKeydown = (evt) => {
  if (isEscape(evt)) {
    closeSuccessModal();
  }
}
const onErrorDocumentEscKeydown = (evt) => {
  if (isEscape(evt)) {
    closeErrorModal();
  }
}
const onSuccessDocumentClick = (evt) => {
  if (evt.target.className === 'success') {
    closeSuccessModal();
  }
}

const onErrorDocumentClick = (evt) => {
  if (evt.target.className === 'error') {
    closeErrorModal();
  }
}

const onSuccessMessageCloseButtonClick = closeSuccessModal;

const showSuccessModal = () => {
  main.appendChild(successMessage);
  successMessageCloseButton.addEventListener('click', onSuccessMessageCloseButtonClick);
  document.addEventListener('keydown', onSuccessDocumentEscKeydown);
  document.addEventListener('click', onSuccessDocumentClick);
}

const onErrorMessageCloseButtonClick = closeErrorModal;

const showErrorModal = () => {
  main.appendChild(errorMessage);
  errorMessageCloseButton.addEventListener('click', onErrorMessageCloseButtonClick);
  document.addEventListener('keydown', onErrorDocumentEscKeydown);
  document.addEventListener('click', onErrorDocumentClick);
}

export { showSuccessModal, showErrorModal };
