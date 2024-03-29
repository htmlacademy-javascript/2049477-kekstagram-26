import { openBigPicture } from './big-picture.js';

const userPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

const createPicture = (picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.addEventListener('click', () => {openBigPicture(picture);});
  pictureFragment.appendChild(pictureElement);
};

const renderPictures = (pictures) => {
  pictures.forEach((picture) => {
    createPicture(picture);
  });
  return userPictures.appendChild(pictureFragment);
};

export {renderPictures};

