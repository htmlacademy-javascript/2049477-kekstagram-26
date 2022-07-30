import { getRandomElements, debounce } from './util.js';
import { renderPictures } from './pictures.js';

const RANDOM_QUANTITY = 10;
const imageFilters = document.querySelector('.img-filters');
const defaultFilterButton = document.querySelector('#filter-default');
const randomFilterButton = document.querySelector('#filter-random');
const discussedFilterButton = document.querySelector('#filter-discussed');


const compareComments = (firstComment, secondComment) => {
  const firstValue = firstComment.comments.length;
  const secondValue = secondComment.comments.length;
  return secondValue - firstValue;
};

const createDefaultFilter = (pictures) => pictures.slice();

const createRandomFilter = (pictures) => {
  const picturesList = pictures.slice();
  return getRandomElements(picturesList).slice(0, RANDOM_QUANTITY);
};

const createDiscussedFilter = (pictures) => {
  const picturesList = pictures.slice();
  return picturesList.sort(compareComments);
};

const removeActiveClass = () => {
  const activeFilterButton = document.querySelector('.img-filters__button--active');
  activeFilterButton.classList.remove('img-filters__button--active');
};

const clearPicturesContainer = () => {
  const picturesContainer = document.querySelectorAll('.picture');
  picturesContainer.forEach((picture) => {
    picture.remove();
  });
};

const renderPicturesFilter = (pictures) => {
  clearPicturesContainer();
  renderPictures(pictures);
};

const showFilteredPictures = (pictures) => {
  imageFilters.classList.remove('img-filters--inactive');
  defaultFilterButton.addEventListener('click', debounce((evt) => {
    removeActiveClass();
    if (evt.target === defaultFilterButton) {
      defaultFilterButton.classList.add('img-filters__button--active');
    }
    renderPicturesFilter(createDefaultFilter(pictures));
  }));

  randomFilterButton.addEventListener('click', debounce((evt) => {
    removeActiveClass();
    if (evt.target === randomFilterButton) {
      randomFilterButton.classList.add('img-filters__button--active');
    }
    renderPicturesFilter(createRandomFilter(pictures));
  }));
  discussedFilterButton.addEventListener('click', debounce((evt) => {
    removeActiveClass();
    if (evt.target === discussedFilterButton) {
      discussedFilterButton.classList.add('img-filters__button--active');
    }
    renderPicturesFilter(createDiscussedFilter(pictures));
  }));
};

export {showFilteredPictures};
