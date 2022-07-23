import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFile();
  }
};

function openFile() {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
}

function closeFile() {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);
}

uploadFile.addEventListener('click', () => {
  openFile();
});

uploadCancel.addEventListener('click', () => {
  closeFile();
});


