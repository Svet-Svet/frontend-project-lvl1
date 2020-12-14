import getRandomNumber from '../utilits.js';
import runGame from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
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

  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [rightAnswer, String(question)];
};

const startGamePrime = () => runGame(getGame, condition);

export default startGamePrime;
