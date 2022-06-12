import crypto from 'crypto';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { Messages } from '../utils/messages.js';

export const calculateHash = async (fileToHash) => {
  const resolvedPath = resolve(fileToHash);
  if(existsSync(resolvedPath)) {
    const data = readFileSync(resolvedPath, 'utf-8');
    const hash = crypto.createHash('sha256');
    console.log(hash.update(data).digest('hex'));
  } else {
    console.log(Messages.OPERATION_FALIED);
  }
};