import { isEscapeKey, isEnterKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const thumbnails = document.querySelectorAll('.picture');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
};

function openPicture() {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closePicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

for (const thumbnail of thumbnails) {
  thumbnail.addEventListener('click', () => {
    openPicture();

    thumbnail.addEventListener('keydown', (evt) => {
      if (isEnterKey(evt)) {
        evt.preventDefault();
        openPicture();
      }
    });
  });
}

bigPictureCancel.addEventListener('click', () => {
  closePicture();
});

export {onPopupEscKeydown, bigPicture};

