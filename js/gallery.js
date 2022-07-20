import { urls, DESCRIPTIONS, NAMES } from './data.js';
import { pickItem,getRandomInteger } from './util.js';

const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialComment = document.querySelectorAll('.social__comment');
const socialCaption = document.querySelector('.social__caption');
const socialPictureSvg = document.querySelector('.social__picture');

const createPicItem = () => {
  const imgPic = bigPictureImg.querySelector('img');
  imgPic.src = pickItem(urls);

  likesCount.textContent = getRandomInteger(1, 200);
  commentsCount.textContent = getRandomInteger(1, 200);
  socialPictureSvg.src = `img/avatar-${  getRandomInteger(1, 6)  }.svg`;
  socialPictureSvg.alt = NAMES[getRandomInteger(0, 11)];
  socialCaption.textContent = pickItem(DESCRIPTIONS);
};

socialComment.innerHTML = createPicItem();


