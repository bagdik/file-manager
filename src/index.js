import readline from 'readline';
import { Messages } from './utils/messages.js';
import { getUserName } from './utils/utils.js';
import { up } from './operations/up.js';
import { cd } from './operations/cd.js';
import { ls } from './operations/ls.js';
import { read } from './operations/read-file.js';
import { create } from './operations/create-file.js';
import { rename } from './operations/rename-file.js';
import { copy } from './operations/copy-file.js';
import { mv } from './operations/move-file.js';
import { remove } from './operations/delete-file.js'
import { getOsInformation } from './operations/os.js';
import { calculateHash } from './operations/calcHash.js';
import { compress, decompress } from './operations/zlib.js';

const userName = getUserName();
console.log(`${Messages.WELCOME}${userName}!`);

const homeDirectory = process.env.HOME;
process.chdir(homeDirectory);
let currentDirectory = process.cwd();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `${Messages.CURRENT_DIRECTORY} ${currentDirectory}>`
});

rl.prompt();

rl.on('line', (line) => {
  const command = line.trim().split(' ');
  switch (command[0]) {
    case 'up':
      currentDirectory = up(currentDirectory);
      rl.setPrompt(`${Messages.CURRENT_DIRECTORY} ${currentDirectory}>`);
      break;
    case 'cd':
      currentDirectory = cd(command[1]);
      rl.setPrompt(`${Messages.CURRENT_DIRECTORY} ${currentDirectory}>`);
      break;
    case 'ls':
      ls(currentDirectory, rl.getPrompt());
      break;
    case 'cat':
      read(command[1], rl.getPrompt());
      break;
    case 'add':
      create(command[1], rl.getPrompt());
      break;
    case 'rn':
      rename(command[1], command[2], rl.getPrompt());
      break;
    case 'cp':
      copy(command[1], command[2], rl.getPrompt());
      break;
    case 'mv':
      mv(command[1], command[2], rl.getPrompt());
      break;
    case 'rm':
      remove(command[1], rl.getPrompt());
      break; 
    case 'os':
      getOsInformation(command[1]);
      break;
    case 'hash':
      calculateHash(command[1]);
      break;
    case 'compress':
      compress(command[1], command[2]);
      break;
    case 'decompress':
      decompress(command[1], command[2]);
      break;
    case '.exit':
      rl.close();
      break;
    default:
      console.log(Messages.INVALID_INPUT);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log(`${Messages.GOODBYE}${userName}!`);
  process.exit(0);
});