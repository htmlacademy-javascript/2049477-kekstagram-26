"use strict";


function getRandomInteger(from, before) {
  from = Math.ceil(from);
  before = Math.floor(before);

  if (before <= from) {
    return console.log("Ошибка! Максимальное значение не может" + '\n' + 
                        "быть меньше значения минимального числа.");
  }
  return Math.abs(Math.floor(Math.random() * (before - from + 1)) + from);
}
console.log(getRandomInteger(1, 100));


function checkStringLength(testString, maxLength = 140) {

  return (testString.length <= maxLength);
}
console.log(checkStringLength('Строка для проверки'));