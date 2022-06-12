import fs from 'fs';
import { Writable } from 'stream';
import { resolve } from 'path';
import { Messages } from '../utils/messages.js';
import { existsSync } from 'fs';

export const read = (pathToFile, prompt) => {
  const content = '';
  const resolvedPath = resolve(pathToFile);
  
  if (existsSync(resolvedPath)) {
    const rs = fs.createReadStream(pathToFile, 'utf-8');
    const ws = new Writable();
    ws._write = (chunk, encoding, next) => {
      console.log(chunk.toString());
      next();
    }
  
    rs.pipe(ws);
    
    rs.push('\n');
    rs.on('data', (err, data) => {
      rs.push(data);
    });
  
    rs.on('end', () => {
      ws.end();
      process.stdout.write(prompt);
    });
  } else {
    console.log(Messages.OPERATION_FALIED);
    process.stdout.write(prompt);
  }
} 