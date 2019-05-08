import React,{ useEffect, useReducer, useState } from 'react';
import Contract from './contracts/SimpleStorage.json';
import './css/App.css';
import getWeb3 from './utils/getWeb3';


const initialState: any = {
  accounts: [],
  contract: {},
  web3: {},
};

const reducer = (state: any, action: any) => ({
  accounts: action.accounts,
  contract: action.contract,
  web3: action.web3,
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState('none');

  useEffect(() => {
    const init = async() => {
      try {
        // Get network provider and web3 instance.
        const web3: any = await getWeb3();

        // Use web3 to get the user's accounts.
        const accounts: any = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId: number = await web3.eth.net.getId();
        const deployedNetwork = Contract.networks[networkId];
        const instance = new web3.eth.Contract(
          Contract.abi,
          deployedNetwork && deployedNetwork.address,
        );

        // Set web3, accounts, and contract to the state, and then proceed with an
        dispatch({
          accounts,
          contract: instance,
          web3
        });

      } catch(error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    }
    init();
  }, []);

  // example of interacting with the contract's methods.
  const runExample = async() => {
    const { contract, accounts }: any = state;

    // Stores a given value, 'hello World' by default.
    await contract.methods.set('hello World').send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response: string = await contract.methods.get().call();

    // Update state with the result.
    setValue(response);
  }

  return (
    <div className="App">
      {
        !state.web3 ? <div>Loading Web3, accounts, and contract...</div>

        :
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
      }
    </div>
  );
}

export default App;
