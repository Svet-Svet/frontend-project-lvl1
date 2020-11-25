/* eslint-disable no-console, no-await-in-loop, import/extensions, no-eval */

import readlineSync from 'readline-sync';
import randomNumber from '../utilits.js';
import numOfRounds from '../index.js';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const randomNumber2 = () => (Math.floor(Math.random() * 10));

const isMakeProgression = (firstNum, difference, progressionLength) => {
  const progression = [];
  for (let i = firstNum; progression.length < progressionLength; i += difference) {
    progression.push(i);
  }
  return progression;
};

export const startGamesPartEight = () => {
  for (let i = 1; i <= numOfRounds; i += 1) {
    const firstNum = randomNumber();
    const difference = randomNumber(1, 5);
    const progressionLength = 10;
    const progression = isMakeProgression(firstNum, difference, progressionLength);
    const makeRandomIndex = randomNumber2(0, progressionLength - 1);
    const rightAnswer = String(progression[makeRandomIndex]);
    progression[makeRandomIndex] = '..';
    const question = progression.join(' ');

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!)`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};
