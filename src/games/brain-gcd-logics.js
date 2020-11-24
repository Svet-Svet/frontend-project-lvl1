/* eslint-disable no-console, no-await-in-loop, import/extensions, no-eval */

import readlineSync from 'readline-sync';
import { gcd } from 'mathjs';

const numOfRounds = 3;

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const randomNumber1 = () => (Math.floor(Math.random() * 100));
const randomNumber2 = () => (Math.floor(Math.random() * 100));

export const startGamesPartSeven = () => {
  for (let i = 1; i <= numOfRounds; i += 1) {
    const isRandomNumber1 = randomNumber1();
    const isRandomNumber2 = randomNumber2();
    const question = `${isRandomNumber1} ${isRandomNumber2}`;
    console.log(`Question: ${question}`);
    const isMethod = () => gcd(isRandomNumber1, isRandomNumber2);
    const rightAnswer = isMethod();
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!)`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};
