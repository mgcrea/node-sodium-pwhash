import sodium from "sodium-native";
import { asBuffer } from "../utils";

export const verifySync = (str: Buffer | string, password: Buffer | string): boolean => {
  return sodium.crypto_pwhash_str_verify(asBuffer(str), asBuffer(password));
};

export const verify = (str: Buffer | string, password: Buffer | string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    sodium.crypto_pwhash_str_verify_async(asBuffer(str), asBuffer(password), (err, bool) => {
      err ? reject(err) : resolve(bool);
    });
  });
};
