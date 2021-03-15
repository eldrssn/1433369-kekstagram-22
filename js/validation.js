const MAX_HASHTAGS_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const HASHTAG_PATTERN = /^#[А-яёA-z0-9]+$/i;
const WARNINGS = {
  equal: 'Oдинаковые хэш-теги недопустимы',
  amout: 'Хэш-тегов не должно быть больше пяти',
  limit: 'Хэш-тег не может быть больше 20-ти символов',
  pattern: 'Недопустимые знаки',
};
const WARNING_COLOR = '#ff4040';

const description = document.querySelector('.text__description');
const hashtag = document.querySelector('.text__hashtags');

const onDescriptionInvalid = () => {
  if (description.validity.tooLong) {
    description.setCustomValidity('Комментарий должен быть не более 140 символов');
    description.style.border = WARNING_COLOR + ' solid 3px';
    description.style.color = WARNING_COLOR;
  } else {
    description.setCustomValidity('');
    description.style.borderColor = '';
    description.style.color = '';
  }

  description.reportValidity();
};

const onHastagInput = () => {
  const errors = [];
  const hashtags = hashtag.value.trim().toLowerCase().split(' ');

  hashtags.forEach((el, i) => {
    if (!HASHTAG_PATTERN.test(el) && el !== '' && el !== '#') {
      errors.push(WARNINGS.pattern);
    }
    if (el.length > MAX_HASHTAG_LENGTH) {
      errors.push(WARNINGS.limit);
    }

    for (let j = 1; j < hashtags.length; j++) {
      if (hashtags[i] === hashtags[j] && i !== j) {
        if (!errors.includes(WARNINGS.equal)) {
          errors.push(WARNINGS.equal);
        }
      }
    }
  });

  if (hashtags.length > MAX_HASHTAGS_COUNT) {
    errors.push(WARNINGS.amout);
  }

  hashtag.setCustomValidity(errors.join('. '));
  hashtag.reportValidity();

  if (errors.length) {
    hashtag.style.border = WARNING_COLOR + ' solid 3px';
    hashtag.style.color = WARNING_COLOR;
  } else {
    hashtag.style.borderColor = '';
    hashtag.style.color = '';
  }
};

const onEscKeydown = (evt) => {
  evt.stopPropagation();
}

const setValidationForm = () => {
  description.addEventListener('invalid', onDescriptionInvalid)
  hashtag.addEventListener('input', onHastagInput);

  hashtag.addEventListener('keydown', onEscKeydown);
  description.addEventListener('keydown', onEscKeydown);
}

const unsetValidationForm = () => {
  description.removeEventListener('invalid', onDescriptionInvalid);
  hashtag.removeEventListener('input', onHastagInput);

  hashtag.removeEventListener('keydown', onEscKeydown);
  description.removeEventListener('keydown', onEscKeydown);
}

export { setValidationForm, unsetValidationForm };
