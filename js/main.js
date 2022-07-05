const getRandomInteger = (from, to) => {
  const lowerNumber = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upperNumber = Math.floor(Math.min(Math.abs(from), Math.abs(to)));

  const result = Math.random() * (upperNumber - lowerNumber + 1) + lowerNumber;

  return Math.floor(result);
};
getRandomInteger(1, 100);


const checkStringLength = (testString, maxLength = 140) => testString.length <= maxLength;
checkStringLength('Строка для проверки');

