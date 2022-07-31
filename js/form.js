import { onFilterButtonChange, onScaleButtonClick, imgScaleContainer, effectsList, sliderWrapper } from './effects.js';
import { showMessageSuccess, showMessageError } from './messages.js';
import { isEscapeKey } from './util.js';
import { sendData } from './api.js';

const FILES_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'heic'];
const MAX_STRING_LENGTH = 140;
const HASHTAGS_QUANTITY = 5;
const HASHTAG_REPEAT_ALERT = 'Хэштеги не должны повторяться!';
const HASHTAG_CONTENT_ALERT = 'Хэштег должен начинатьтся со знака # и содержать только буквы и цифры, не более 20 символов. Хэштеги отделяются пробелами';
const NUMBER_HASHTAGS_ALERT = 'Не более 5 хэштегов';
const COMMENT_LENGTH_ALERT = `Длина комментария не более ${MAX_STRING_LENGTH} символов`;

const imageUploadField = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const buttonCancel = document.querySelector('.img-upload__cancel');
const buttonSubmit = document.querySelector('.img-upload__submit');
const imagePreview = document.querySelector('.img-upload__preview').querySelector('img');
const body = document.querySelector('body');
const hashtagsText = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');
const reg = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const imageUploadInput = document.querySelector('.img-upload__input');

const uploadImage = () => {
  const image = imageUploadInput.files[0];
  const imageName = image.name.toLowerCase();

  const imageMatching = FILES_TYPES.some((it) => imageName.endsWith(it));
  if (imageMatching) {
    imagePreview.src = URL.createObjectURL(image);
  }
};

const checkCommentsLength = (value) => value.length <= MAX_STRING_LENGTH;

const getHashtags = (string) => string.split(' ').filter((item) => item !== '');

const checkHashtagsQuantity = (string) => getHashtags(string).length <= HASHTAGS_QUANTITY;

const validateUniqueHashtags = (string) => {
  const hashtags = string.toLowerCase().trim().split(' ');
  return hashtags.length === (new Set(hashtags)).size;
};

const checkHashtagsSymbols = (string) => {
  const hashtags = getHashtags(string);
  return hashtags.every((element) => reg.test(element));
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPopup();
  }
};

const onPopupCloseButtonClick = () => {
  closeUploadPopup ();
};

function closeUploadPopup  () {
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupCloseButtonClick);
  imgScaleContainer.removeEventListener('click', onScaleButtonClick);
  effectsList.removeEventListener('change', onFilterButtonChange);
  imagePreview.removeAttribute('class');
  imagePreview.removeAttribute('style');
  uploadForm.reset();
}

const onFocusBlurEscKeydown = () => {
  commentsField.addEventListener('focus', () => {
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
  commentsField.addEventListener('blur', () => {
    document.addEventListener('keydown', onPopupEscKeydown);
  });
  hashtagsText.addEventListener('focus', () => {
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
  hashtagsText.addEventListener('blur', () => {
    document.addEventListener('keydown', onPopupEscKeydown);
  });
};

const disableSubmitButton = () => {
  buttonSubmit.disabled = true;
  buttonSubmit.textContent = 'Публикую...';
};

const enableSubmitButton = () => {
  buttonSubmit.disabled = false;
  buttonSubmit.textContent = 'Опубликовать';
};

function showPopupOnChange (evt) {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  buttonCancel.addEventListener('click', onPopupCloseButtonClick);
  document.addEventListener('keydown',onPopupEscKeydown);
  onFocusBlurEscKeydown();
  sliderWrapper.classList.add('hidden');
  imgScaleContainer.addEventListener('click', onScaleButtonClick);
  effectsList.addEventListener('change', onFilterButtonChange);
  uploadImage(evt);
}

const pristine = new Pristine(uploadForm, {
  classTo: 'text',
  errorClass: 'text--invalid',
  successClass: 'text-valid',
  errorTextParent: 'text',
  errorTextTag: 'div',
  errorTextClass: 'text__error'
});

pristine.addValidator(
  commentsField,
  checkCommentsLength,
  COMMENT_LENGTH_ALERT
);
pristine.addValidator(
  hashtagsText,
  validateUniqueHashtags,
  HASHTAG_REPEAT_ALERT
);
pristine.addValidator(
  hashtagsText,
  checkHashtagsQuantity,
  NUMBER_HASHTAGS_ALERT
);
pristine.addValidator(
  hashtagsText,
  checkHashtagsSymbols,
  HASHTAG_CONTENT_ALERT
);

const submitForm = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      disableSubmitButton();
      sendData(
        () => {
          onSuccess();
          enableSubmitButton();
          showMessageSuccess();
          closeUploadPopup();
        },
        () => {
          enableSubmitButton();
          showMessageError();
          closeUploadPopup();
        },
        new FormData(evt.target),
      );
    }
  });
};

imageUploadField.addEventListener('change', showPopupOnChange);

export {
  closeUploadPopup,
  showPopupOnChange,
  imageUploadField,
  uploadImage,
  submitForm,
  body
};

