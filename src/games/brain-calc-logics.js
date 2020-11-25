/* eslint-disable no-console, no-await-in-loop, import/extensions, no-eval */

import readlineSync from 'readline-sync';
import randomNumber from '../utilits.js';
import numOfRounds from '../index.js';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const randomSign = [' - ', ' + ', ' * '];
const randomIndexSign = Math.floor(Math.random() * 3);
const sign = () => randomSign[randomIndexSign];

export const startGamesPartSix = () => {
  for (let i = 1; i <= numOfRounds; i += 1) {
    const isRandomNumber1 = randomNumber();
    const isRandomNumber2 = randomNumber();
    const isRandomSign = sign();
    const question = isRandomNumber1 + isRandomSign + isRandomNumber2;
    console.log(`Question: ${question}`);
    const isMethod = () => eval(question);
    const rightAnswer = isMethod();
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!)`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};
