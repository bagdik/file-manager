import path from 'path';
import fs from 'fs';
import { Messages } from '../utils/messages.js';

export const rename = async (oldFilename, newFilename, prompt) => {
  const newFilePath = path.join(
    oldFilename
      .split(path.sep)
      .slice(0, -1)
      .join(path.sep),
    newFilename
  );
  if (!fs.existsSync(newFilePath)) {
    fs.rename(path.resolve(oldFilename), path.resolve(newFilePath), err => {
      if (err) {
        console.log(Messages.OPERATION_FALIED);
        process.stdout.write(prompt);
        return;
      }
      console.log('The file has been renamed!');
      process.stdout.write(prompt);
    });
  } else {
    console.log(`${Messages.OPERATION_FALIED}: the file already exists`);
  }
};