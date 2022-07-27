const scaleContolSmaller = document.querySelector('.scale__control--smaller');
const scaleContolBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview img');

const getScaleValue = () => parseInt(scaleControlValue.value, 10);

const setScaleValue = (value) => {
  let item = Math.max(value, 25);
  item = Math.min(100, item);
  scaleControlValue.value = `${item}%`;
  uploadImage.style.transform = `scale(${parseFloat(item/100)})`;
};
const reset = () => {
  setScaleValue(100);
};

reset();

scaleContolSmaller.addEventListener('click', () => {
  const currentItem = getScaleValue();
  setScaleValue(currentItem - 25);
});

scaleContolBigger.addEventListener('click', () => {
  const currentItem = getScaleValue();
  setScaleValue(currentItem + 25);
});
