import sodium from "sodium-native";
import { asBuffer } from "../utils";
import { SODIUM_PWHASH_DEFAULTS } from "./defaults";

export const hashSync = (
  password: Buffer | string,
  opslimit: number = SODIUM_PWHASH_DEFAULTS.opslimit,
  memlimit: number = SODIUM_PWHASH_DEFAULTS.memlimit,
): Buffer => {
  const output = Buffer.allocUnsafe(sodium.crypto_pwhash_STRBYTES);
  sodium.crypto_pwhash_str(output, asBuffer(password), opslimit, memlimit);
  return output;
};

export const hash = (
  password: Buffer | string,
  opslimit: number = SODIUM_PWHASH_DEFAULTS.opslimit,
  memlimit: number = SODIUM_PWHASH_DEFAULTS.memlimit,
): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const output = Buffer.allocUnsafe(sodium.crypto_pwhash_STRBYTES);
    sodium.crypto_pwhash_str_async(output, asBuffer(password), opslimit, memlimit, (err) => {
      err ? reject(err) : resolve(output);
    });
  });
};

export const needsRehash = (
  hash: Buffer | string,
  opslimit: number = SODIUM_PWHASH_DEFAULTS.opslimit,
  memlimit: number = SODIUM_PWHASH_DEFAULTS.memlimit,
): boolean => {
  return sodium.crypto_pwhash_str_needs_rehash(asBuffer(hash), opslimit, memlimit);
};
