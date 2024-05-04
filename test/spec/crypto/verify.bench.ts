import { hashSync, verify, verifySync } from "src/crypto";
import { bench, describe } from "vitest";

describe("verify", () => {
  const password = Buffer.from("MyPassw0rd!");
  const hashed = hashSync(password);

  bench(
    "verifySync",
    () => {
      verifySync(hashed, password);
    },
    { time: 200, iterations: 0 },
  );

  bench(
    "verify",
    async () => {
      await verify(hashed, password);
    },
    { time: 200, iterations: 0 },
  );
});
