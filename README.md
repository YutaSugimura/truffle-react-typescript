# Truffle React Hooks TypeScript Template

This box comes with everything you need to start using smart contracts from a react app. This is as barebones as it gets, so nothing stands in your way.

## Installation

1. First of all, do a git clone to bring this repository locally
    ```zsh
    git clone https://github.com/YutaSugimura/truffle-react-typescript.git
    ```

Delete /test/simpleStorage.test.ts and /contracts/SimpleStorage.sol and create your own contract

2. Installing truffle.
    ```zsh
     npm install -g truffle
    ```

3. Installing the library
    ```zsh
     yarn install
     # or
     npm i
    ```

4. Compiling Contracts.  
    Compile the smart contract.
    ```zsh
    yarn compile
    ```

5. Run the development console.
    ```javascript
    truffle develop

6. In the `client` directory, we run the React app. Smart contract changes must be manually recompiled and migrated.
    ```zsh
    # in another terminal (i.e. not in the truffle develop prompt)
    cd client
    npm start
    # or
    yarn start
    ```

7. Using ethereum-waffle to test smart contracts
    ```zsh
    yarn test

    # or
    npm run test
    ```

8. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```zsh
    # ensure you are inside the client directory when running this
    npm run test
    # or
    yarn test
    ```

9. To build the application for production, use the build script. A production build will be in the `client/build` folder.
    ```zsh
    # ensure you are inside the client directory when running this
    npm run build
    # or
    yarn build
    ```
