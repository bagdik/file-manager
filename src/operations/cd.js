import path from 'path';
import { Messages } from '../utils/messages.js';

export const cd = (dest) => {
  const resolvedPath = path.resolve(dest); 
  try {
    process.chdir(resolvedPath);
  } catch (error) {
    console.log(Messages.OPERATION_FALIED);
  }
  return process.cwd();
}