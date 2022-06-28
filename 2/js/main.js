function getRandomInteger(from, before) {
  from = Math.ceil(from);
  before = Math.floor(before);

  if (before <= from) {
    return 'Ошибка! Максимальное значение не может ' +
           'быть меньше значения минимального числа.';
  }
  return Math.abs(Math.floor(Math.random() * (before - from + 1)) + from);
}
getRandomInteger(1, 100);


function checkStringLength(testString, maxLength = 140) {

  return (testString.length <= maxLength);
}
checkStringLength('Строка для проверки');
