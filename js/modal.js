import { img, setScaleControl, unsetScaleControl } from './scale-control.js'
import { setEffectContol, unsetEffectControl } from './effect-control.js'
import { sendData } from './api.js';
import { showSuccessModal, showErrorModal } from './upload-message.js';
import { setValidationForm, unsetValidationForm } from './validation.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

// находим DOM-элементы
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = uploadOverlay.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const effectPreviews = uploadForm.querySelectorAll('.effects__preview');

const insertPhoto = () => {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      img.src = reader.result;
      effectPreviews.forEach((preview) => {
        preview.style.backgroundImage = `url(${reader.result}`;
      });
    });

    reader.readAsDataURL(file);
  }
}

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

  insertPhoto();

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
