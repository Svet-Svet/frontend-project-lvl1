/* eslint-disable no-console, no-await-in-loop, import/extensions, no-eval */

import readlineSync from 'readline-sync';
import { gcd } from 'mathjs';
import randomNumber from '../utilits.js';
import numOfRounds from '../index.js';

const startGamesPartSeven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= numOfRounds; i += 1) {
    const isRandomNumber1 = randomNumber();
    const isRandomNumber2 = randomNumber();
    const question = `${isRandomNumber1} ${isRandomNumber2}`;
    console.log('Question:', question);
    const isMethod = () => gcd(isRandomNumber1, isRandomNumber2);
    const rightAnswer = isMethod();
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};

export default startGamesPartSeven;
