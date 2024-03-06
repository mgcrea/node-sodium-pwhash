import sodium from "sodium-native";
import { asBuffer, asSizedBuffer } from "../utils";

export const verifySync = (hashed: Buffer | string, password: Buffer | string): boolean => {
  return sodium.crypto_pwhash_str_verify(asSizedBuffer(hashed, 128), asBuffer(password));
};

export const verify = (hashed: Buffer | string, password: Buffer | string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    sodium.crypto_pwhash_str_verify_async(asSizedBuffer(hashed, 128), asBuffer(password), (err, bool) => {
      err ? reject(err) : resolve(bool);
    });
  });
};
