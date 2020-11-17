/* eslint-disable no-console, no-await-in-loop, import/extensions */

import promptly from 'promptly';

export default async () => {
  const whatIsYourName = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${whatIsYourName}!`);
};
