import { hash, hashSync, hashToString, hashToStringSync, verify, verifySync } from "src/crypto";
import { describe, expect, it } from "vitest";

describe("SodiumAuth", () => {
  it("should properly verify a hashed password", async () => {
    const password = Buffer.from("MyPassw0rd!");
    const hashed = hashSync(password);
    const bool = verifySync(hashed, password);
    expect(bool).toBeDefined();
    expect(typeof bool).toBe("boolean");
    expect(bool).toBe(true);
  });

  it("should properly async verify a hashed password", async () => {
    const password = Buffer.from("MyPassw0rd!");
    const hashed = await hash(password);
    const bool = await verify(hashed, password);
    expect(bool).toBeDefined();
    expect(typeof bool).toBe("boolean");
    expect(bool).toBe(true);
  });

  it("should properly verify a hashed string password", async () => {
    const password = Buffer.from("MyPassw0rd!");
    const hashed = hashToStringSync(password);
    const bool = verifySync(hashed, password);
    expect(bool).toBeDefined();
    expect(typeof bool).toBe("boolean");
    expect(bool).toBe(true);
  });

  it("should properly async verify a hashed string password", async () => {
    const password = Buffer.from("MyPassw0rd!");
    const hashed = await hashToString(password);
    const bool = await verify(hashed, password);
    expect(bool).toBeDefined();
    expect(typeof bool).toBe("boolean");
    expect(bool).toBe(true);
  });
});
