import { createDescriptions } from './data.js';
import { createPicItem } from './comments.js';

const userPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const bigPictureImg = document.querySelector('.big-picture__img');
const fullPicture = bigPictureImg.querySelector('img');
const likesNum = document.querySelector('.likes-count');

const similarDescriptions = createDescriptions();

const pictureFragment = document.createDocumentFragment();

similarDescriptions.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').innerHTML = comments.length;
  pictureFragment.append(pictureElement);
});
userPictures.append(pictureFragment);


const pictures = userPictures.querySelectorAll('.picture');

pictures.forEach((picture) => {
  picture.addEventListener('click', () => {
    fullPicture.src = picture.querySelector('.picture__img').src;
    likesNum.textContent = picture.querySelector('.picture__likes').textContent;
    createPicItem();
  });
});


