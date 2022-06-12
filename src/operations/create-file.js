import { resolve } from 'path';
import { writeFile, existsSync } from 'fs';
import { Messages } from '../utils/messages.js';

export const create = async (pathToFile, prompt) => {
  const resolvedPath = resolve(pathToFile);
 
  console.log(resolvedPath);
  if (!existsSync(resolvedPath)) {
    writeFile(resolvedPath, '', err => {
      if (err) console.log(Messages.OPERATION_FALIED);
      console.log('The file has been created!');  
      process.stdout.write(prompt);  
    });
  } else {
    console.log(`${Messages.OPERATION_FALIED}: file already exists.`);
  }
};