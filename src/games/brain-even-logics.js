/* eslint-disable no-console, no-await-in-loop, import/extensions */

import randomNumber from '../utilits.js';
import getGame from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  const isEven = (num) => num % 2 === 0;
  const question = randomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [rightAnswer, String(question)];
};

const startGamesPartFive = () => getGame(startGame, condition);

export default startGamesPartFive;

// export { startGamesPartFive };

/* const startGamesPartFive = () => {
  for (let i = 1; i <= numOfRounds; i += 1) {
    const getRandomNumber = randomNumber();
    console.log(`Question: ${getRandomNumber}`);
    const rightAnswer = getRandomNumber % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};

export default startGamesPartFive; */
