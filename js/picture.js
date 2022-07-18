import { createDescriptions } from './data.js';

const userPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarDescriptions = createDescriptions();

const pictureFragment = document.createDocumentFragment();


similarDescriptions.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').innerHTML = Object.keys(comments);
  pictureFragment.appendChild(pictureElement);
});
userPictures.append(pictureFragment);

