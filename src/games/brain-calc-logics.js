/* eslint-disable no-console, no-await-in-loop, import/extensions, no-eval */

import readlineSync from 'readline-sync';

const numOfRounds = 3;

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const randomNumber1 = () => (Math.floor(Math.random() * 100));
const randomNumber2 = () => (Math.floor(Math.random() * 100));

const randomSign = [' - ', ' + ', ' * '];
const randomIndexSign = Math.floor(Math.random() * 3);
const sign = () => randomSign[randomIndexSign];

export const startGamesPartSix = () => {
  for (let i = 1; i <= numOfRounds; i += 1) {
    const isRandomNumber1 = randomNumber1();
    const isRandomNumber2 = randomNumber2();
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
