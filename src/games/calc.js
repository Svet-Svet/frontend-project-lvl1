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
      throw new Error(`Unknown operator: '${sign}'!`);
  }
};

const getGame = () => {
  const signs = ['-', '+', '*'];
  const getRandomIndex = getRandomNumber(0, signs.length - 1);
  const signRandom = signs[getRandomIndex];
  const getRandomNumber1 = getRandomNumber();
  const getRandomNumber2 = getRandomNumber();
  const question = `${getRandomNumber1} ${signRandom} ${getRandomNumber2}`;
  const rightAnswer = calc(getRandomNumber1, getRandomNumber2, signRandom);
  return [String(rightAnswer), question];
};

const startGameCalc = () => runGame(getGame, condition);

export default startGameCalc;
