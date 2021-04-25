// "SPDX-License-Identifier: <SPDX-License>"
pragma solidity ^0.5.0;

contract ConditionalRelease {
    string public name = 'Conditional Release Contract';

    mapping(address => uint) public lockedBalance;
    mapping(address => bool) public isLocking;

    //lock tokens (deposit)
    function lockEth() public payable {
        if(msg.value < 1000) {
            revert();
        }
        else {
        //update locked balance
        lockedBalance[msg.sender] = lockedBalance[msg.sender] + msg.value;
        //if hasLockded = false, add msg.sender's address to owners array
        
        //update isLocking
        if(isLocking[msg.sender] == false) {
            isLocking[msg.sender] = true;
        }

    }
}

    //withdraw tokens on condition....here is where we will use our VRF
    function withdrawEth() public {
        //require the withdrawer to have a lockingBalance > zero
        require(lockedBalance[msg.sender] > 0, 'withdrawer must currently have locked funds');

        //transfer the ETH back to the sender, and subtract the amount withrawn from the sender's balance
        msg.sender.transfer(lockedBalance[msg.sender]);

        lockedBalance[msg.sender] = 0;

        isLocking[msg.sender] = false;
       
    }
    
}