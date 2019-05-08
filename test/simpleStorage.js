const SimpleStorage = artifacts.require("./SimpleStorage.sol");

contract("SimpleStorage", accounts => {
  it("...should store the value 'Hello World'.", async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();

    // Set value of "Hello World"
    await simpleStorageInstance.set("Hello World", { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.get.call();

    assert.equal(storedData, "Hello World", "The value 'Hello World' was not stored.");
  });
});
