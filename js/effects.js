const SCALE_STEP = 25;
const MIN_VALUE= 25;
const MAX_VALUE = 100;
const EFFECTS = {
  chrome: {
    filter: 'grayscale',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  sepia: {
    filter: 'sepia',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  marvin: {
    filter: 'invert',
    units: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    }
  },
  phobos: {
    filter: 'blur',
    units: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  },
  heat: {
    filter: 'brightness',
    units: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  },
};
const scaleValue = document.querySelector('.scale__control--value');
const imgScaleContainer = document.querySelector('.img-upload__scale');
const effectSlider = document.querySelector('.effect-level__slider');
const sliderWrapper = document.querySelector('.effect-level');
const effectValue = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectsList = document.querySelector('.effects__list');


const onScaleButtonClick = (evt) => {
  const scaleInput = Number.parseInt(scaleValue.value, 10);
  let scaleCount;
  const buttonScale = evt.target;
  if (buttonScale.matches('.scale__control--bigger') && scaleInput < MAX_VALUE) {
    scaleCount =  scaleInput + SCALE_STEP;
    scaleValue.value = `${scaleCount}%`;
  }

  if (buttonScale.matches('.scale__control--smaller') && scaleInput > MIN_VALUE) {
    scaleCount = scaleInput - SCALE_STEP;
    scaleValue.value = `${scaleCount}%`;
  }

  if (scaleCount >= MAX_VALUE) {
    scaleCount = MAX_VALUE;
    scaleValue.value = `${scaleCount}%`;
  }

  if (scaleCount <= MIN_VALUE) {
    scaleCount = MIN_VALUE;
    scaleValue.value = `${scaleCount}%`;
  }
  imgPreview.style.transform = `scale(${scaleCount / 100})`;
};


const initEffects = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => parseFloat(value),
    },
  });
};

const onFilterButtonChange = (evt) => {
  const evtHandler = evt.target.value;
  if (evtHandler === 'none') {
    sliderWrapper.classList.add('hidden');
    imgPreview.style.filter = 'none';
  }  else {
    sliderWrapper.classList.remove('hidden');
    imgPreview.removeAttribute('class');
    imgPreview.classList.add(`effects__preview--${evtHandler}`);
    effectSlider.noUiSlider.updateOptions(EFFECTS[evtHandler].options);
    effectSlider.noUiSlider.on('update', () => {
      effectValue.value = effectSlider.noUiSlider.get();
      imgPreview.style.filter = `${EFFECTS[evtHandler].filter}(${effectValue.value}${EFFECTS[evtHandler].units})`;
    });
  }
};

export {
  onFilterButtonChange,
  onScaleButtonClick,
  imgScaleContainer,
  sliderWrapper,
  initEffects,
  effectsList
};

