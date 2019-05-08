pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {

  function testItStoresAValue() public {
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

    simpleStorage.set("Hello World");

    uint expected = "Hello World";

    Assert.equal(simpleStorage.get(), expected, "It should store the value 'Hello World'.");
  }

}