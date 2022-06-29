function getRandomInteger(from, before) {
  from = Math.ceil(from);
  before = Math.floor(before);

  return Math.abs(Math.floor(Math.random() * (before - from + 1)) + from);
}
getRandomInteger(1, 100);


function checkStringLength(testString, maxLength = 140) {

  return (testString.length <= maxLength);
}
checkStringLength('Строка для проверки');
