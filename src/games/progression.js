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
  const firstNum = getRandomNumber();
  const difference = getRandomNumber(1, 5);
  const progressionLength = 10;
  const getRandomNumberOfIndex = () => (Math.floor(Math.random() * progressionLength));
  const progression = getProgression(firstNum, difference, progressionLength);
  const makeRandomIndex = getRandomNumberOfIndex(0, progressionLength - 1);
  const rightAnswer = String(progression[makeRandomIndex]);
  progression[makeRandomIndex] = '..';
  const question = progression.join(' ');

  return [rightAnswer, String(question)];
};

const startGameProgression = () => runGame(getGame, condition);

export default startGameProgression;
