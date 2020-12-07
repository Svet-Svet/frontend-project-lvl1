/* eslint-disable no-console, no-await-in-loop, import/extensions, no-eval */

import randomNumber from '../utilits.js';
import getGame from '../index.js';

const condition = 'What number is missing in the progression?';

const startGame = () => {
  const randomNumberOfIndex = () => (Math.floor(Math.random() * 10));

  const getProgression = (firstNum, difference, progressionLength) => {
    const progression = [];
    for (let i = firstNum; progression.length < progressionLength; i += difference) {
      progression.push(i);
    }
    return progression;
  };

  const firstNum = randomNumber();
  const difference = randomNumber(1, 5);
  const progressionLength = 10;
  const progression = getProgression(firstNum, difference, progressionLength);
  const makeRandomIndex = randomNumberOfIndex(0, progressionLength - 1);
  const rightAnswer = String(progression[makeRandomIndex]);
  progression[makeRandomIndex] = '..';
  const question = progression.join(' ');

  return [rightAnswer, String(question)];
};

const startGamesPartEight = () => getGame(startGame, condition);

export default startGamesPartEight;
