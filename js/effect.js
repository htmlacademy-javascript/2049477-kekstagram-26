const imagePreview = document.querySelector('.img-upload__preview img');
const imageEffects = document.querySelector('.img-upload__effects');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevel = sliderContainer.querySelector('.effect-level__value');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');

let currentEffect;

window.noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const hideSlider = () => {
  if (currentEffect === 'none') {
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
  }
};

const resetSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
};

const onEffectChange = (evt) => {
  imagePreview.classList.remove(`effects__preview--${currentEffect}`);
  currentEffect = evt.target.value;
  imagePreview.classList.add(`effects__preview--${currentEffect}`);

  hideSlider();

  if (currentEffect === 'none' || currentEffect === 'chrome' || currentEffect === 'sepia') {
    resetSlider();
  }

  if (currentEffect === 'marvin') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  }

  if (currentEffect === 'phobos') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }

  if (currentEffect === 'heat') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }

};

sliderElement.noUiSlider.on('update', () => {
  effectLevel.value = sliderElement.noUiSlider.get();

  if (currentEffect === 'none') {
    imagePreview.style.filter = 'none';
  }

  if (currentEffect === 'chrome') {
    imagePreview.style.filter = `grayscale(${effectLevel.value})`;
  }

  if (currentEffect === 'sepia') {
    imagePreview.style.filter = `sepia(${effectLevel.value})`;
  }

  if (currentEffect === 'marvin') {
    imagePreview.style.filter = `invert(${effectLevel.value}%)`;
  }

  if (currentEffect === 'phobos') {
    imagePreview.style.filter = `blur(${effectLevel.value}px)`;
  }
  if (currentEffect === 'heat') {
    imagePreview.style.filter = `brightness(${effectLevel.value})`;
  }
});

imageEffects.addEventListener('change', onEffectChange);

