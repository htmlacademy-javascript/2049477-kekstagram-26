import { isEscapeKey } from './util.js';
import { body } from './form.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageFragment = document.createDocumentFragment();
const errorMessageFragment = document.createDocumentFragment();

const showMessageSuccess = () => {
  const messageSuccess = successMessageTemplate.cloneNode(true);
  successMessageFragment.appendChild(messageSuccess);
  body.appendChild(successMessageFragment);
  const buttonSuccess = document.querySelector('.success__button');
  const sectionSuccess = document.querySelector('.success');
  const successInner = document.querySelector('.success__inner');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      sectionSuccess.remove();
    }
  });
  sectionSuccess.addEventListener(('click'), (evt) => {
    if (evt.target === buttonSuccess) {
      sectionSuccess.remove();
    }
  });
  sectionSuccess.addEventListener(('click'), (evt) => {
    if (evt.target === successInner) {
      sectionSuccess.remove();
    }
  });
};

const showMessageError = () => {
  const messageError = errorMessageTemplate.cloneNode(true);
  errorMessageFragment.appendChild(messageError);
  body.appendChild(errorMessageFragment);
  const buttonError = document.querySelector('.error__button');
  const sectionError = document.querySelector('.error');
  const errorInner = document.querySelector('.error__inner');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      sectionError.remove();
    }
  });
  sectionError.addEventListener(('click'), (evt) => {
    if (evt.target === buttonError) {
      sectionError.remove();
    }
  });
  sectionError.addEventListener(('click'), (evt) => {
    if (evt.target === errorInner) {
      sectionError.remove();
    }
  });
};

export {showMessageSuccess, showMessageError};
