const checkStringLength = (testString, maxLength = 140) => testString.length <= maxLength;
checkStringLength('q');

const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const URL = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];
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
const SIMILAR_DESCRIPTION_COUNT = 25;

const getRandomInteger = (from, before) => {
  from = Math.ceil(from);
  before = Math.floor(before);

  return Math.abs(Math.floor(Math.random() * (before - from + 1)) + from);
};

const comments = [{
  id: getRandomInteger(1, 200),
  avatar: `img/avatar-${  getRandomInteger(1, 6)  }.svg`,
  message: MESSAGES[getRandomInteger(0, 6)],
  name: NAMES[getRandomInteger(0, 11)],
}];

const getArrayFromObjects = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generatePhotoDescription = () => ({
  id: getArrayFromObjects(ID),
  url: getArrayFromObjects(URL),
  description: getArrayFromObjects(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments,
});

// eslint-disable-next-line no-unused-vars
const similarDesctiprions = Array.from({length: SIMILAR_DESCRIPTION_COUNT}, generatePhotoDescription);


