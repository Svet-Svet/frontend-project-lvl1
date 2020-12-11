import getRandomNumber from '../utilits.js';
import runGame from '../index.js';

const condition = 'What number is missing in the progression?';

const getProgression = (firstNum, difference, progressionLength) => {
  const progression = [];
  for (let i = firstNum; progression.length < progressionLength; i += difference) {
    progression.push(i);
  }
  return progression;
};

const getGame = () => {
  const randomNumberOfIndex = () => (Math.floor(Math.random() * 10));

  const firstNum = getRandomNumber();
  const difference = getRandomNumber(1, 5);
  const progressionLength = 10;
  const progression = getProgression(firstNum, difference, progressionLength);
  const makeRandomIndex = randomNumberOfIndex(0, progressionLength - 1);
  const rightAnswer = String(progression[makeRandomIndex]);
  progression[makeRandomIndex] = '..';
  const question = progression.join(' ');

  return [rightAnswer, String(question)];
};

const startGamesPartEight = () => runGame(getGame, condition);

export default startGamesPartEight;
