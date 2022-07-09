const getRandomInteger = (from, before) => {
  from = Math.ceil(from);
  before = Math.floor(before);

  return Math.abs(Math.floor(Math.random() * (before - from + 1)) + from);
};

const pickItem = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, pickItem};
