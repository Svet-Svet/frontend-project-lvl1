import getRandomNumber from '../utilits.js';
import runGame from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeNum = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGame = () => {
  const question = getRandomNumber();

  const rightAnswer = primeNum(question) ? 'yes' : 'no';
  return [rightAnswer, String(question)];
};

const startGamesPartNine = () => runGame(getGame, condition);

export default startGamesPartNine;
