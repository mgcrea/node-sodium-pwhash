import { hash, hashString, hashStringSync, hashSync } from "src/crypto";
import { describe, expect, it } from "vitest";

describe("SodiumAuth", () => {
  it("should properly hash a password", async () => {
    const password = Buffer.from("MyPassw0rd!");
    const hashed = hashSync(password);
    expect(hashed).toBeDefined();
    expect(typeof hashed).toBe("object");
    expect(Buffer.isBuffer(hashed)).toBeTruthy();
    expect(hashed.length).toBe(128);
  });

  it("should properly async hash a password", async () => {
    const password = Buffer.from("MyPassw0rd!");
    const hashed = await hash(password);
    expect(hashed).toBeDefined();
    expect(typeof hashed).toBe("object");
    expect(Buffer.isBuffer(hashed)).toBeTruthy();
    expect(hashed.length).toBe(128);
  });

  it("should properly hash a password to a string", async () => {
    const password = Buffer.from("MyPassw0rd!");
    const hashed = hashStringSync(password);
    expect(hashed).toBeDefined();
    expect(typeof hashed).toBe("string");
    expect(hashed.length < 128).toBeTruthy();
  });

  it("should properly async hash a password to a string", async () => {
    const password = Buffer.from("MyPassw0rd!");
    const hashed = await hashString(password);
    expect(hashed).toBeDefined();
    expect(typeof hashed).toBe("string");
    expect(hashed.length < 128).toBeTruthy();
  });
});
