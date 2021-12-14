import { hash, hashSync } from 'src/crypto';

describe('SodiumAuth', () => {
  it('should properly hash a password', async () => {
    const password = Buffer.from('MyPassw0rd!');
    const hashed = hashSync(password);
    expect(hashed).toBeDefined();
    expect(typeof hashed).toEqual('object');
    expect(Buffer.isBuffer(hashed)).toBeTruthy();
    expect(hashed.length).toEqual(128);
  });

  it('should properly async hash a password', async () => {
    const password = Buffer.from('MyPassw0rd!');
    const hashed = await hash(password);
    expect(hashed).toBeDefined();
    expect(typeof hashed).toEqual('object');
    expect(Buffer.isBuffer(hashed)).toBeTruthy();
    expect(hashed.length).toEqual(128);
  });
});
