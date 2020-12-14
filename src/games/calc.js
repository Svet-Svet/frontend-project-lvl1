/* eslint-disable consistent-return */

import getRandomNumber from '../utilits.js';
import runGame from '../index.js';

const condition = 'What is the result of the expression?';

const calc = (number1, number2, sign) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
};

const getGame = () => {
  const listSigns = ['-', '+', '*'];
  const getRandomIndex = getRandomNumber(0, listSigns.length - 1);
  const sign = listSigns[getRandomIndex];
  const getRandomNumber1 = getRandomNumber();
  const getRandomNumber2 = getRandomNumber();
  const question = `${getRandomNumber1} ${sign} ${getRandomNumber2}`;
  const rightAnswer = calc(getRandomNumber1, getRandomNumber2, sign);
  return [String(rightAnswer), String(question)];
};

const startGameCalc = () => runGame(getGame, condition);

export default startGameCalc;
