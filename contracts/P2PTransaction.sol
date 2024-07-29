// contracts/P2PTransaction.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract P2PTransaction {
    struct LoanRequest {
        uint id;
        address payable borrower;
        uint amount;
        uint interestRate;
        uint duration;
        bool funded;
        bool repaid;
    }

    uint public loanRequestCount;
    mapping(uint => LoanRequest) public loanRequests;

    event LoanRequested(uint id, address borrower, uint amount, uint interestRate, uint duration);
    event LoanFunded(uint id, address lender);
    event LoanRepaid(uint id, address borrower);

    function requestLoan(uint _amount, uint _interestRate, uint _duration) public {
        loanRequestCount++;
        loanRequests[loanRequestCount] = LoanRequest(
            loanRequestCount,
            payable(msg.sender),
            _amount,
            _interestRate,
            _duration,
            false,
            false
        );

        emit LoanRequested(loanRequestCount, msg.sender, _amount, _interestRate, _duration);
    }

    function fundLoan(uint _id) public payable {
        LoanRequest storage loanRequest = loanRequests[_id];
        require(msg.value == loanRequest.amount, "Incorrect amount sent");
        require(!loanRequest.funded, "Loan already funded");

        loanRequest.funded = true;
        loanRequest.borrower.transfer(msg.value);

        emit LoanFunded(_id, msg.sender);
    }

    function repayLoan(uint _id) public payable {
        LoanRequest storage loanRequest = loanRequests[_id];
        uint repaymentAmount = loanRequest.amount + (loanRequest.amount * loanRequest.interestRate / 100);
        require(msg.value == repaymentAmount, "Incorrect repayment amount");
        require(loanRequest.funded, "Loan not funded");
        require(!loanRequest.repaid, "Loan already repaid");

        loanRequest.repaid = true;

        emit LoanRepaid(_id, msg.sender);
    }
}
