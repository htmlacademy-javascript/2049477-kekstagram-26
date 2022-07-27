const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview img');

const MAX_VALUE = 100;
const MIN_VALUE = 25;

const getScaleValue = () => parseInt(scaleControlValue.value, 10);

const setScaleValue = (value) => {
  let item = Math.max(value, MIN_VALUE);
  item = Math.min(MAX_VALUE, item);
  scaleControlValue.value = `${item}%`;
  uploadImage.style.transform = `scale(${parseFloat(item/100)})`;
};
const reset = () => {
  setScaleValue(MAX_VALUE);
};

reset();

scaleControlSmaller.addEventListener('click', () => {
  const currentItem = getScaleValue();
  setScaleValue(currentItem - MIN_VALUE);
});

scaleControlBigger.addEventListener('click', () => {
  const currentItem = getScaleValue();
  setScaleValue(currentItem + MIN_VALUE);
});
