/* global noUiSlider:readonly */
import { img } from './scale-control.js';

const CHROME = {
  RANGE: {
    MIN: 0,
    MAX: 1,
  },
  START: 1,
  STEP: 0.1,
  CONNECT: 'lower',
}

const SEPIA = {
  RANGE: {
    MIN: 0,
    MAX: 1,
  },
  START: 1,
  STEP: 0.1,
  CONNECT: 'lower',
}

const MARVIN = {
  RANGE: {
    MIN: 0,
    MAX: 100,
  },
  START: 100,
  STEP: 0.1,
  CONNECT: 'lower',
}

const PHOBOS = {
  RANGE: {
    MIN: 0,
    MAX: 3,
  },
  START: 3,
  STEP: 0.1,
  CONNECT: 'lower',
}

const HEAT = {
  RANGE: {
    MIN: 1,
    MAX: 3,
  },
  START: 3,
  STEP: 0.1,
  CONNECT: 'lower',
}

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

const checkSliderExists = () => {
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy()
  }
};

const unsetEffectControl = () => {
  img.className = '';
  img.style.filter = 'none';
  sliderLevel.setAttribute('value', '');
  sliderElement.setAttribute('disabled', true);
}

const setEffectContol = () => {
  chrome.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--chrome';

    noUiSlider.create(sliderElement, {
      range: {
        min: CHROME.RANGE.MIN,
        max: CHROME.RANGE.MAX,
      },
      start: CHROME.START,
      step: CHROME.STEP,
      connect: CHROME.CONNECT,
    });
    sliderElement.removeAttribute('disabled');

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.setAttribute('value', values[0]);
      img.style.filter = `grayscale(${sliderLevel.value})`;
    });
  });

  sepia.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--sepia';

    noUiSlider.create(sliderElement, {
      range: {
        min: SEPIA.RANGE.MIN,
        max: SEPIA.RANGE.MAX,
      },
      start: SEPIA.START,
      step: SEPIA.STEP,
      connect: SEPIA.CONNECT,
    });
    sliderElement.removeAttribute('disabled');

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.setAttribute('value', values[0]);
      img.style.filter = `sepia(${sliderLevel.value})`;
    });

  });

  marvin.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--marvin';

    noUiSlider.create(sliderElement, {
      range: {
        min: MARVIN.RANGE.MIN,
        max: MARVIN.RANGE.MAX,
      },
      start: MARVIN.START,
      step: MARVIN.STEP,
      connect: MARVIN.CONNECT,
    });
    sliderElement.removeAttribute('disabled');

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.setAttribute('value', values[0]);
      img.style.filter = `invert(${sliderLevel.value}%)`;
    });
  });

  phobos.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--phobos';

    noUiSlider.create(sliderElement, {
      range: {
        min: PHOBOS.RANGE.MIN,
        max: PHOBOS.RANGE.MAX,
      },
      start: PHOBOS.START,
      step: PHOBOS.STEP,
      connect: PHOBOS.CONNECT,
    });
    sliderElement.removeAttribute('disabled');

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.setAttribute('value', values[0]);
      img.style.filter = `blur(${sliderLevel.value}px)`;
    });
  });

  heat.addEventListener('click', () => {
    checkSliderExists();
    img.className = 'effects__preview--heat';

    noUiSlider.create(sliderElement, {
      range: {
        min: HEAT.RANGE.MIN,
        max: HEAT.RANGE.MAX,
      },
      start: HEAT.START,
      step: HEAT.STEP,
      connect: HEAT.CONNECT,
    });
    sliderElement.removeAttribute('disabled');

    sliderElement.noUiSlider.on('update', (values) => {
      sliderLevel.setAttribute('value', values[0]);
      img.style.filter = `brightness(${sliderLevel.value})`;
    });
  });

  none.addEventListener('click', () => {
    unsetEffectControl()
  });
};

export { setEffectContol, unsetEffectControl };
