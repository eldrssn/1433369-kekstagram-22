import { img, setScaleControl, unsetScaleControl } from './scale-control.js'
import { setEffectContol, unsetEffectControl } from './effect-control.js'
import { sendData } from './api.js';
import { showSuccessModal, showErrorModal } from './upload-message.js';
import { setValidationForm, unsetValidationForm } from './validation.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = uploadOverlay.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const effectPreviews = uploadForm.querySelectorAll('.effects__preview')

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
        preview.style.backgroundImage = `url(${reader.result})`;
      });
    });
    reader.readAsDataURL(file);
  }
}

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('.modal-open');
  uploadForm.reset();
  uploadForm.removeEventListener('submit', onUploadFormSubmit);
  document.removeEventListener('keydown', onDocumentKeydown);
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

const onDocumentKeydown = (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    closeModal();
    unsetScaleControl();
    unsetEffectControl();
    unsetValidationForm();
  }
}

const onUploadCancelClick = () => {
  closeModal();
  unsetScaleControl();
  unsetEffectControl();
  unsetValidationForm();
}

uploadInput.addEventListener('change', () => {
  insertPhoto();
  uploadForm.addEventListener('submit', onUploadFormSubmit);
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  uploadCancel.addEventListener('click', onUploadCancelClick);
  document.addEventListener('keydown', onDocumentKeydown);

  setScaleControl();
  setEffectContol();
  setValidationForm();
});
