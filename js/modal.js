import { setScaleControl, unsetScaleControl } from './scale-control.js'
import { setEffectContol, unsetEffectControl } from './effect-control.js'
import { sendData } from './api.js';
import { showSuccessModal, showErrorModal } from './upload-message.js';
import { setValidationForm, unsetValidationForm } from './validation.js';


// находим DOM-элементы
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = uploadOverlay.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const onUploadFormSubmit = (evt) => {
  evt.preventDefault();

  sendData(
    () => showSuccessModal(),
    () => showErrorModal(),
    new FormData(evt.target),
  );
  closeModal();
  unsetScaleControl();
  unsetEffectControl();

}

// функция закрытия модального окна
const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('.modal-open');
  uploadForm.reset();
  uploadForm.removeEventListener('submit', onUploadFormSubmit);
}

// обработчик клика на открытие модального окна
uploadInput.addEventListener('change', () => {

  uploadForm.addEventListener('submit', onUploadFormSubmit);

  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  //обработчик закрытия модального окна по клику
  uploadCancel.addEventListener('click', () => {
    closeModal();
    unsetScaleControl();
    unsetEffectControl();
    unsetValidationForm();
  });

  // обработчик закрытия модального окна по клавише ESC
  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      closeModal();
      unsetScaleControl();
      unsetEffectControl();
      unsetValidationForm();
    }
  });

  // добавляем контролы масштаба и эффектов внутрь, чтобы обработчики внутри
  // были активны только, когда окно открыто
  setScaleControl();
  setEffectContol();
  setValidationForm();
});
