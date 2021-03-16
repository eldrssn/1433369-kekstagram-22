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
}
const closeErrorModal = () => {
  main.removeChild(errorMessage);

}
const showSuccessModal = () => {
  main.appendChild(successMessage);
  successMessageCloseButton.addEventListener('click', closeSuccessModal);
  successMessageCloseButton.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      closeSuccessModal();
    }
  });
  body.addEventListener('click', (evt) => {
    if (evt.currentTarget !== successMessage) {
      closeSuccessModal();
    }
  });
}

const showErrorModal = () => {
  main.appendChild(errorMessage);
  errorMessageCloseButton.addEventListener('click', closeErrorModal);
  errorMessageCloseButton.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      closeErrorModal();
    }
  });
  body.addEventListener('click', (evt) => {
    if (evt.currentTarget !== errorMessage) {
      closeErrorModal();
    }
  });
}

export { showSuccessModal, showErrorModal };
