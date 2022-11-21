pragma solidity >=0.4.22 <0.9.0;

contract voteCount {
    string value;

    constructor(){
        value = "person1";
    }

    function get() public view returns(string memory){
        return value;
    }
}