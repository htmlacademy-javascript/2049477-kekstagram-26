import { isEscapeKey } from './util.js';

const MAX_COMMENTS_LENGTH = 5;
const bigPicture = document.querySelector('.big-picture');
const closePictureButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const body = document.querySelector('body');
let counter = 0;

const createComment = (comment) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentAvatar.width = 35;
  commentAvatar.height = 35;
  newComment.appendChild(commentAvatar);
  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;
  newComment.appendChild(commentText);

  return newComment;
};

const openBigPicture = (picture) => {

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture();
    }
  };

  const onPopupCloseButtonClick = () => {
    closeBigPicture();
  };

  function closeBigPicture() {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    closePictureButton.removeEventListener('click', onPopupCloseButtonClick);
    commentsLoader.removeEventListener('click', loadCommentsOnChange);
    counter = 0;
  }

  function loadCommentsOnChange() {
    counter += MAX_COMMENTS_LENGTH;
    createCommentsSlice();
  }

  function createCommentsSlice() {
    commentsContainer.innerHTML = '';
    const commentsFragment = document.createDocumentFragment();
    const commentsToShow = picture.comments.slice(0, counter + MAX_COMMENTS_LENGTH);
    commentsToShow.forEach((comment) => {
      commentsFragment.appendChild(createComment(comment));
    });
    commentsContainer.appendChild(commentsFragment);
    commentsLoader.classList.toggle('hidden', picture.comments.length === commentsToShow.length);
    commentsCount.innerHTML = `${commentsToShow.length} из <span class="comments-count">${picture.comments.length}</span> комментариев`;
  }

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  createCommentsSlice();
  commentsLoader.addEventListener('click', loadCommentsOnChange);

  closePictureButton.addEventListener('click', onPopupCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

export {openBigPicture};


