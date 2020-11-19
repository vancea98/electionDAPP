pragma solidity ^0.5.16;

contract Election {
	// Store candidate
	// Read candidate
	string public candidate;
	// Constructor
	function ElectionConstructor () public {
		candidate = "Candidate 1";
	}
}