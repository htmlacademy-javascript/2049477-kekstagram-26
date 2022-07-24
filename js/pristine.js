const MAX_COMMENT_LENGTH = 140;
const uploadForm = document.querySelector('.img-upload__form');
const reg = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const hashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__form__error'
});

function validateHashtag () {
  const hashtagPristineValidation = reg.test(hashtag.value);
  return hashtagPristineValidation;
}
pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  validateHashtag,
  'Хэштег должен начинаться со знака #, и не должен содержать специальные символы.'
);

function validateLengthHashtag () {
  return hashtag.value.length < 20;
}
pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  validateLengthHashtag,
  'Длина хэштега не более 20 символов.'
);

function validateComment () {
  return textDescription.value.length <= MAX_COMMENT_LENGTH;
}

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  validateComment,
  'Длина комментария не более 140 символов.'
);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
