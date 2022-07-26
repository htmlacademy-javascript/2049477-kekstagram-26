import { DESCRIPTIONS, NAMES } from './data.js';
import { pickItem, getRandomInteger } from './util.js';

const MAX_COMMENT_LENGTH = 140;
const MAX_COMMENT_COUNT = 5;

const commentSubmitButton = document.querySelector('.social__footer-btn');
const socialCommentsList = document.querySelector('.social__comments');
const commentField = document.querySelector('.social__footer-text');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsCount = document.querySelector('.comments-count');
const socialCaption = document.querySelector('.social__caption');
const socialPictureSvg = document.querySelector('.social__picture');
const commentsLoader = document.querySelector('.social__comments-loader');

const createPicItem = () => {
  socialPictureSvg.src = `img/avatar-${  getRandomInteger(1, 6)  }.svg`;
  socialPictureSvg.alt = NAMES[getRandomInteger(0, 11)];
  socialCaption.textContent = pickItem(DESCRIPTIONS);
};

const createNewComment = () => {

  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  const newAvatar = document.createElement('img');
  newAvatar.classList.add('social__picture');
  newAvatar.src = `img/avatar-${  getRandomInteger(1, 6)  }.svg`;
  newAvatar.alt = NAMES[getRandomInteger(0, 11)];
  newComment.append(newAvatar);
  const newText = document.createElement('p');
  newText.classList.add('social__text');
  newText.textContent = commentField.value;
  commentField.value = '';
  newComment.append(newText);

  socialCommentsList.append(newComment);
};

const getCommentsCount = () => {

  const comments = document.querySelectorAll('.social__comment');
  commentsCount.textContent = comments.length;

  socialCommentCount.textContent = `Показано ${ comments.length } из 
                        ${commentsCount.textContent} комментариев`;

  if(comments.length > MAX_COMMENT_COUNT) {
    socialCommentCount.textContent = `Показано ${MAX_COMMENT_COUNT} из 
                        ${commentsCount.textContent} комментариев`;

  }

  commentsLoader.addEventListener('click', () => {
    if(comments.length >= 5) {
      commentsLoader.classList.add('hidden');
    } else {
      commentsLoader.classList.remove('hidden');
    }
  });
};

commentField.oninput = () => {
  if (commentField.value.length > MAX_COMMENT_LENGTH) {
    commentSubmitButton.disabled = true;
  } else {
    commentSubmitButton.disabled = false;
  }
};

commentSubmitButton.addEventListener('click', () => {
  createNewComment();
  getCommentsCount();
});

export {
  createPicItem,
  getCommentsCount,
  createNewComment
};
