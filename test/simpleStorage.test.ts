import { expect, use } from 'chai';
import { Contract } from 'ethers';
import { deployContract, MockProvider, solidity } from 'ethereum-waffle';
import SimpleStorage from '../build/SimpleStorage.json';

use(solidity);

describe('SimpleStorage', () => {
  const [wallet, walletTo] = new MockProvider().getWallets();
  let storage: Contract;

  beforeEach(async () => {
    storage = await deployContract(wallet, SimpleStorage);
  });

  it('initial value', async () => {
    const text = await storage.get();
    expect('get').to.be.calledOnContract(storage);
    expect(text).to.equal('');
  });

  it('Set value', async() => {
    await storage.set('hello world');
    const text = await storage.get();
    expect(text).to.equal('hello world');
  });
});
