const Contract = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(Contract);
};