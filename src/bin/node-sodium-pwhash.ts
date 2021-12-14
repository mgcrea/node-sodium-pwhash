#! /usr/bin/env node
import { crypto_pwhash_STRBYTES } from 'sodium-native';
import { hashSync, verifySync } from './../crypto';

const [action = 'help', ...args] = process.argv.slice(2);

const readStdin = async (bufferSize?: number): Promise<Buffer> => {
  return new Promise((resolve) => {
    const buffers: Buffer[] = [];
    process.stdin.on('readable', () => {
      const read = process.stdin.read();
      if (read) {
        buffers.push(read);
      }
    });
    process.stdin.on('end', () => {
      resolve(Buffer.concat(buffers, bufferSize));
    });
  });
};

const main = async () => {
  switch (action) {
    case 'hash': {
      const buffer = hashSync(args[0]);
      console.log(buffer.toString('ascii'));
      break;
    }
    case 'verify': {
      const stdin = await readStdin(crypto_pwhash_STRBYTES);
      const result = verifySync(stdin, args[0]);
      if (result) {
        console.log('Password verified');
        process.exit(0);
      } else {
        console.log('Password failed verification');
        process.exit(1);
      }
      break;
    }
    default:
      console.log('Sorry, that is not something I know how to do.');
  }
};

main();
