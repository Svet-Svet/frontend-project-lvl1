/* eslint-disable no-console, no-await-in-loop, import/extensions */
import readlineSync from 'readline-sync';

const numOfRounds = 3;

const runGame = (getGame, condition) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  for (let i = 1; i <= numOfRounds; i += 1) {
    const [rightAnswer, question] = getGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
