import React, { useState, useEffect } from 'react';
import './css/App.css';
import { Contract } from 'web3-eth-contract';
import json from './contracts/SimpleStorage.json';
import useWeb3 from './hooks/web3';

const App: React.VFC = () => {
  const { isLoading, isWeb3, web3, accounts } = useWeb3();
  const [instance, setInstance] = useState<Contract>();
  const [value, setValue] = useState('');

  const abi: any = json.abi;

  useEffect(() => {
    (async() => {
      if(web3 !== null) {
        // const networkId = await web3.eth.net.getId();
        const deployedNetwork = json.networks[3];
        const instance = new web3.eth.Contract(
          abi,
          deployedNetwork && deployedNetwork.address
        );
        setInstance(instance);
      }
    })();
  }, [isLoading, isWeb3]);

  const runExample = async() => {
    await instance?.methods.set('hello World').send({ from: accounts[0]});
    const response = await instance?.methods.get().call();
    setValue(response);
  }

  return (
    <div className="App">
      { isLoading ? <div>Loading Web3, accounts, and contract...</div>
      : isWeb3 ? 
        <>
          <h1>Good to Go!</h1>
          <p>Your Truffle Box is installed and ready.</p>
          <h2>Smart Contract Example</h2>
          <p>
            If your contracts compiled and migrated successfully, below will show
            a stored value of "hello World" (by default).
          </p>
          <p>
            Try changing the value stored on <strong>line 63</strong> of App.ts.
          </p>
          <div>The stored value is: {value}</div>

          <p>Click here to run the contract↓</p>
          <button onClick={runExample} >click</button>
        </>
        : <div>
          <p>none web3</p>
        </div>
      }
    </div>
  );
}

export default App;
