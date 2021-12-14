import sodium from 'sodium-native';

export const SODIUM_PWHASH_DEFAULTS = {
  opslimit: sodium.crypto_pwhash_OPSLIMIT_MODERATE,
  memlimit: sodium.crypto_pwhash_MEMLIMIT_MODERATE,
};
