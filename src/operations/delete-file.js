import { unlink } from 'fs';
import { resolve } from 'path';
import { Messages } from '../utils/messages.js';

export const remove = async (fileToDelete, prompt) => {
  unlink(resolve(fileToDelete), err => {
    if (err) {
        console.log(Messages.OPERATION_FALIED);
        process.stdout.write(prompt);
        return;
      }; 
        console.log('The file has been deleted!');
        process.stdout.write(prompt);
      });
};