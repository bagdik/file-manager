import zlib from 'zlib';
import { createReadStream, createWriteStream, existsSync } from 'fs';
import { resolve } from 'path';
import { Messages } from '../utils/messages.js';

export const compress = async (src, dest) => {
  if (existsSync(resolve(src))) {
    const gzip = zlib.createGzip();
    const inp = createReadStream(resolve(src));
    const out = createWriteStream(resolve(dest));
    inp.pipe(gzip).pipe(out);
  } else {
    console.log(Messages.OPERATION_FALIED); 
  }
};

export const decompress = async (src, dest) => {
  if (existsSync(resolve(src))) {
    const gunzip = zlib.createGunzip();
    const inp = createReadStream(resolve(src));
    const out = createWriteStream(resolve(dest));
    inp.pipe(gunzip).pipe(out);
  } else {
    console.log(Messages.OPERATION_FALIED); 
  }
};