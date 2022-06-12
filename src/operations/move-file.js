import { resolve, basename } from 'path';
import { copyFile, existsSync, unlink } from 'fs';
import { Messages } from '../utils/messages.js';

export const mv = async (src, dest, prompt) => {
  const srcPath = resolve(src);
  const newFilePath = resolve(dest, basename(src));
  if (!existsSync(newFilePath)) {
    copyFile(srcPath, newFilePath, err => {
      if (err) {
        console.log(Messages.OPERATION_FALIED);
        process.stdout.write(prompt);
        return;
      }; 
      unlink(srcPath, err => {
        if (err) {
            console.log(Messages.OPERATION_FALIED);
            process.stdout.write(prompt);
            return;
          }; 
            console.log('The file has been moved!');
            process.stdout.write(prompt);
          });
      });
  } else {
    console.log(`${Messages.OPERATION_FALIED}: the file already exists`);
    process.stdout.write(prompt);
  }
}
