const getRandomInteger = function(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const pickItem = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// checkStringLength = (string, length) => string.length <= length;

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

export {
  getRandomInteger,
  pickItem,
  isEscapeKey,
  isEnterKey,
};
