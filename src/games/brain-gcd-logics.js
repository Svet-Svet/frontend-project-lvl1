import randomNumber from '../utilits.js';
import getGame from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  const getRandomNumber1 = randomNumber();
  const getRandomNumber2 = randomNumber();
  const question = `${getRandomNumber1} ${getRandomNumber2}`;

  const getGcdNumber = (num1, num2) => {
    const smallestNum = Math.min(num1, num2);
    if (smallestNum === 0) return Math.max(num1, num2);
    for (let j = smallestNum; j > 0; j -= 1) {
      if (num2 % j === 0 && num1 % j === 0) {
        return j;
      }
    }
    return false;
  };

  const count = () => getGcdNumber(getRandomNumber1, getRandomNumber2);
  const rightAnswer = String(count());
  return [rightAnswer, String(question)];
};

const startGamesPartSeven = () => getGame(startGame, condition);

export default startGamesPartSeven;
