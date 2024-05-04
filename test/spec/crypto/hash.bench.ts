import { hash, hashSync, hashToString, hashToStringSync } from "src/crypto";
import { bench, describe } from "vitest";

describe("hash", () => {
  const password = Buffer.from("MyPassw0rd!");

  bench(
    "hashSync",
    () => {
      hashSync(password);
    },
    { time: 200, iterations: 0 },
  );

  bench(
    "hash",
    async () => {
      await hash(password);
    },
    { time: 200, iterations: 0 },
  );

  bench(
    "hashToStringSync",
    async () => {
      await hashToStringSync(password);
    },
    { time: 200, iterations: 0 },
  );

  bench(
    "hashToString",
    async () => {
      await hashToString(password);
    },
    { time: 200, iterations: 0 },
  );
});
