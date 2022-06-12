import { readdir } from 'fs';
import { resolve } from 'path';
import { Messages } from '../utils/messages.js';

export const ls = async (dir, prompt) => {
  readdir(resolve(dir), 'utf-8', (err, files) => {
    if (err) console.log(Messages.OPERATION_FALIED);
    files.forEach(file => {
      console.log(file);
    });
    process.stdout.write(prompt);
  });
}