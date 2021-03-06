import { hash, hashSync, verify, verifySync } from 'src/crypto';

describe('SodiumAuth', () => {
  it('should properly verify a hashed password', async () => {
    const password = Buffer.from('MyPassw0rd!');
    const hashed = hashSync(password);
    const bool = verifySync(hashed, password);
    expect(bool).toBeDefined();
    expect(typeof bool).toEqual('boolean');
    expect(bool).toBe(true);
  });

  it('should properly async verify a hashed', async () => {
    const password = Buffer.from('MyPassw0rd!');
    const hashed = await hash(password);
    const bool = await verify(hashed, password);
    expect(bool).toBeDefined();
    expect(typeof bool).toEqual('boolean');
    expect(bool).toBe(true);
  });
});
