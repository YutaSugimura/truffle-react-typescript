pragma solidity ^0.6.2;

contract SimpleStorage {
    string public text;

    function set(string memory _text) public {
      text = _text;
    }

    function get() public view returns(string memory) {
      return text;
    }
}