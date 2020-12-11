import randomNumber from '../utilits.js';
import getGame from '../index.js';

const condition = 'What is the result of the expression?';

const startGame = () => {
  const randomSign = [' - ', ' + ', ' * '];
  const randomIndexSign = Math.floor(Math.random() * 3);
  const sign = () => randomSign[randomIndexSign];
  const getRandomNumber1 = randomNumber();
  const getRandomNumber2 = randomNumber();
  const getRandomSign = sign();
  const question = getRandomNumber1 + getRandomSign + getRandomNumber2;
  const count = () => eval(question);
  const rightAnswer = String(count());
  return [rightAnswer, String(question)];
};

const startGamesPartSix = () => getGame(startGame, condition);

export default startGamesPartSix;
