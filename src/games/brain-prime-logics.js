/* eslint-disable no-console, no-await-in-loop, import/extensions, no-eval */

import readlineSync from 'readline-sync';
import { isPrime } from 'mathjs';
import randomNumber from '../utilits.js';
import numOfRounds from '../index.js';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const startGamesPartNine = () => {
  for (let i = 1; i <= numOfRounds; i += 1) {
    const question = randomNumber();
    console.log(`Question: ${question}`);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!)`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};