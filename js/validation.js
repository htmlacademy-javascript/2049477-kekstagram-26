import { isEscapeKey } from './util.js';

const MAX_COMMENT_LENGTH = 140;

const reg = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const submitButton = document.querySelector('#upload-submit');
const hashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

hashtag.type = 'text';

hashtag.oninput = () => {
  const hashtagValidation = reg.test(hashtag.value);

  submitButton.disabled = !hashtagValidation;
};

hashtag.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

textDescription.oninput = () => {
  if(textDescription.value.length <= MAX_COMMENT_LENGTH) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};
textDescription.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});


