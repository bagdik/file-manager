import { resolve, basename } from 'path';
import { copyFile, existsSync } from 'fs';
import { Messages } from '../utils/messages.js';

export const copy = async (src, dest, prompt) => {
  const newFilePath = resolve(dest, basename(src));
  if (!existsSync(newFilePath)) {
    copyFile(resolve(src), newFilePath, err => {
      if (err) {
        console.log(Messages.OPERATION_FALIED);
        process.stdout.write(prompt);
        return;
      }; 
        console.log(`The file '${basename(src)}' has been copied!`);
        process.stdout.write(prompt);
      });
  } else {
    console.log(`${Messages.OPERATION_FALIED}: the file already exists`);
    process.stdout.write(prompt);
  }
}