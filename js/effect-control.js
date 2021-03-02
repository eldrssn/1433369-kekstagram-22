/* global noUiSlider:readonly */
import { img } from './scale-control.js';

// находим DOM-элементы
const effectsWrap = document.querySelector('.img-upload__effects');
const chrome = effectsWrap.querySelector('[for="effect-chrome"]');
const sepia = effectsWrap.querySelector('[for="effect-sepia"]');
const marvin = effectsWrap.querySelector('[for="effect-marvin"]');
const phobos = effectsWrap.querySelector('[for="effect-phobos"]');
const heat = effectsWrap.querySelector('[for="effect-heat"]');
const none = effectsWrap.querySelector('[for="effect-none"]');

const sliderField = document.querySelector('.img-upload__effect-level');
const sliderLevel = sliderField.querySelector('.effect-level__value');
const sliderElement = sliderField.querySelector('.effect-level__slider');

// функция проверки, существует ли слайдер
const checkSliderExists = () => {
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy()
  }
};

// функция сброса значений со слайдера
const unsetEffectControl = () => {
  img.className = '';
  img.style.filter = 'none';
  sliderLevel.value = '';
  sliderElement.noUiSlider.destroy()
}

// функция создания слайдера и изменения эффекта на фото
// со значениями по ТЗ
const setEffectContol = () => {

  chrome.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--chrome';

    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.value = values;
      img.style.filter = `grayscale(${sliderLevel.value})`;
    });

  });

  sepia.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--sepia';

    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.value = values;
      img.style.filter = `sepia(${sliderLevel.value})`;
    });

  });

  marvin.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--marvin';


    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
    });

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.value = values;
      img.style.filter = `invert(${sliderLevel.value}%)`;
    });

  });

  phobos.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--phobos';


    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.value = values;
      img.style.filter = `blur(${sliderLevel.value}px)`;
    });

  });

  heat.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--heat';


    noUiSlider.create(sliderElement, {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.value = values;
      img.style.filter = `brightness(${sliderLevel.value})`;
    });

  });

  none.addEventListener('click', () => {
    unsetEffectControl()
  });

};

export { setEffectContol, unsetEffectControl };
