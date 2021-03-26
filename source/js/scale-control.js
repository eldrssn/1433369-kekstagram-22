const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;
const SCALE_STEP = 25;

const scaleField = document.querySelector('.img-upload__scale');
const imgWrap = document.querySelector('.img-upload__preview');
const scaleSmaller = scaleField.querySelector('.scale__control--smaller');
const scaleBigger = scaleField.querySelector('.scale__control--bigger');
const img = imgWrap.querySelector('img');
const scale = scaleField.querySelector('.scale__control--value');

const getImgScaleStyle = (value) => {
  return `scale(${parseInt(value) / 100}`;
}

const unsetScaleControl = () => {
  scale.value = MAX_SCALE_VALUE + '%';
  img.style.transform = getImgScaleStyle(scale.value);
}

const setScaleControl = () => {
  scaleSmaller.addEventListener('click', () => {
    scale.value = parseInt(scale.value) - SCALE_STEP + '%';

    if (parseInt(scale.value) < MIN_SCALE_VALUE) {
      scale.value = MIN_SCALE_VALUE + '%';
    }
    img.style.transform = getImgScaleStyle(scale.value);
  });

  scaleBigger.addEventListener('click', () => {
    scale.value = parseInt(scale.value) + SCALE_STEP + '%';

    if (parseInt(scale.value) > MAX_SCALE_VALUE) {
      scale.value = MAX_SCALE_VALUE + '%';
    }
    img.style.transform = getImgScaleStyle(scale.value);
  });
}

export { img, setScaleControl, unsetScaleControl };
