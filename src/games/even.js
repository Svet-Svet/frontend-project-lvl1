import getRandomNumber from '../utilits.js';
import runGame from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getGame = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [rightAnswer, String(question)];
};

const startGamesPartFive = () => runGame(getGame, condition);

export default startGamesPartFive;
