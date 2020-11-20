/* eslint-disable no-console, no-await-in-loop, import/extensions */

import readlineSync from 'readline-sync';

const numOfRounds = 3;

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = () => (Math.floor(Math.random() * 100));

export const startGamesPartFive = () => {
  for (let i = 1; i <= numOfRounds; i += 1) {
    const isRandomNumber = randomNumber();
    console.log(`Question: ${isRandomNumber}`);
    const rightAnswer = isRandomNumber % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!)`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};
