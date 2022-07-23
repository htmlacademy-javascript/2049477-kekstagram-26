import { getRandomInteger, pickItem } from './util.js';

const DESCRIPTIONS = [
  'На море',
  'На пляже',
  'Закат',
  'Восход',
  'Рассвет',
  'В баре',
  'С другом',
  'Девушка',
  'Хороший день',
  'С котом',
  'Птички',
  'Тур. поездка',
  'На улице',
  'Всем привет!',
  'Прохладная погода',
  'Летний день',
  'На природе',
  'ЗОЖ',
  'С собакой',
  'Цветочки',
  'Человек',
  'Облака',
  'На лыжах',
  'Радость',
  'Красота!',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. ' +
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. ',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. ' +
  'Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Саня',
  'Johny Cage',
  'Петров',
  'Игнат Валерич',
];
const SIMILAR_DESCRIPTION_COUNT = 26;

const id = [...Array(25)].map((item, index) => index + 1);
const urls = [...Array(25)].map((item, index) => `photos/${index + 1}.jpg`);

const comments = [{
  id: getRandomInteger(1, 200),
  src: `img/avatar-${  getRandomInteger(1, 6)  }.svg`,
  message: MESSAGES[getRandomInteger(0, 6)],
  name: NAMES[getRandomInteger(0, 11)],
},
{
  id: getRandomInteger(1, 200),
  src: `img/avatar-${  getRandomInteger(1, 6)  }.svg`,
  message: MESSAGES[getRandomInteger(0, 6)],
  name: NAMES[getRandomInteger(0, 11)],
}];

const generatePhotoDescription = () => ({
  id: pickItem(id),
  url: pickItem(urls),
  description: pickItem(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments,
});

// eslint-disable-next-line no-unused-vars
const createDescriptions = () => Array.from({length: SIMILAR_DESCRIPTION_COUNT}, generatePhotoDescription);

export {
  createDescriptions,
  DESCRIPTIONS,
  MESSAGES,
  NAMES,
  urls
};
