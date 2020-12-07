/* eslint-disable no-console, no-await-in-loop, import/extensions, no-eval */

import randomNumber from '../utilits.js';
import getGame from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  const question = randomNumber();

  const getPrime = (num) => {
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

  const rightAnswer = getPrime(question) ? 'yes' : 'no';
  return [rightAnswer, String(question)];
};

const startGamesPartNine = () => getGame(startGame, condition);

export default startGamesPartNine;
