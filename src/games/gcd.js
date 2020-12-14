import getRandomNumber from '../utilits.js';
import runGame from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';
const getGcdNumber = (num1, num2) => {
  const smallestNum = Math.min(num1, num2);
  if (smallestNum === 0) return Math.max(num1, num2);
  for (let j = smallestNum; j > 0; j -= 1) {
    if (num2 % j === 0 && num1 % j === 0) {
      return j;
    }
  }
  return NaN;
};

const getGame = () => {
  const getRandomNumber1 = getRandomNumber();
  const getRandomNumber2 = getRandomNumber();
  const question = `${getRandomNumber1} ${getRandomNumber2}`;

  const rightAnswer = String(getGcdNumber(getRandomNumber1, getRandomNumber2));
  return [rightAnswer, String(question)];
};

const startGameGcd = () => runGame(getGame, condition);

export default startGameGcd;
