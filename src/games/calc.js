import getRandomNumber from '../utilits.js';
import runGame from '../index.js';

const condition = 'What is the result of the expression?';

const calc = (number1, number2, sign) => {
  switch (sign) {
    case ' + ':
      return number1 + number2;
    case ' - ':
      return number1 - number2;
    case ' * ':
      return number1 * number2;
    default:
      return false;
  }
};

const getGame = () => {
  const randomSign = [' - ', ' + ', ' * '];
  const randomIndexSign = Math.floor(Math.random() * randomSign.length - 1);
  const getRandomSign = () => randomSign[randomIndexSign];
  const getRandomNumber1 = getRandomNumber();
  const getRandomNumber2 = getRandomNumber();
  const question = getRandomNumber1 + getRandomSign() + getRandomNumber2;
  const rightAnswer = calc(getRandomNumber1, getRandomNumber2, getRandomSign());
  return [String(rightAnswer), String(question)];
};

const startGamesPartSix = () => runGame(getGame, condition);

export default startGamesPartSix;
