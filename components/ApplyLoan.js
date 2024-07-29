import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Select, Textarea } from '@chakra-ui/react';

const ApplyLoan = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [repaymentPeriod, setRepaymentPeriod] = useState('');
  const [collateral, setCollateral] = useState('');
  const [collateralValue, setCollateralValue] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleApply = () => {
    // Call smart contract function to apply for a loan
  };

  return (
    <Box style={{height:"100vh"}}>
      <FormControl id="name" mb={1}>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>

      <FormControl id="age" mb={1}>
        <FormLabel>Age</FormLabel>
        <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </FormControl>


      <FormControl id="amount" mb={4}>
        <FormLabel>Loan Amount</FormLabel>
        <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </FormControl>

      <FormControl id="reason" mb={4}>
        <FormLabel>Reason for Loan</FormLabel>
        <Textarea value={reason} onChange={(e) => setReason(e.target.value)} />
      </FormControl>

      <FormControl id="repaymentPeriod" mb={4}>
        <FormLabel>Repayment Period (in months)</FormLabel>
        <Input type="number" value={repaymentPeriod} onChange={(e) => setRepaymentPeriod(e.target.value)} />
      </FormControl>

      <FormControl id="collateral" mb={4}>
        <FormLabel>Collateral</FormLabel>
        <Input type="text" value={collateral} onChange={(e) => setCollateral(e.target.value)} />
      </FormControl>

      <FormControl id="collateralValue" mb={4}>
        <FormLabel>Collateral Value</FormLabel>
        <Input type="number" value={collateralValue} onChange={(e) => setCollateralValue(e.target.value)} />
      </FormControl>

      <FormControl id="address" mb={4}>
        <FormLabel>Address</FormLabel>
        <Textarea value={address} onChange={(e) => setAddress(e.target.value)} />
      </FormControl>

      <FormControl id="phone" mb={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </FormControl>


      <Button onClick={handleApply} colorScheme="teal">Apply for Loan</Button>
    </Box>
  );
};

export default ApplyLoan;
