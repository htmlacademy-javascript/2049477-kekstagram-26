const ALERT_SHOW_TIME = 5000;
const TIMEOUT_DELAY = 500;

const getRandomInteger = function(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const pickItem = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const checkStringLength = (string, length) => string.length <= length;

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const getRandomElements = (arr) => {
  const newElements = arr.slice();
  const elements = [];
  const newElementsLength = arr.length;
  for (let i = 0; i < newElementsLength; i++) {
    const randomElement = getRandomInteger(0, newElements.length- 1);
    elements.push(newElements[randomElement]);
    newElements.splice(randomElement, 1);
  }
  return elements;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = TIMEOUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export {
  getRandomElements,
  checkStringLength,
  getRandomInteger,
  isEscapeKey,
  isEnterKey,
  showAlert,
  pickItem,
  debounce,
  throttle
};
