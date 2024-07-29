import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import web3 from 'web3';

const Register = () => {
  const [account, setAccount] = useState('');

  const handleRegister = async () => {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
    // Save the account information to your backend
  };

  return (
    <Box>
      <FormControl id="register">
        <FormLabel>Account Address</FormLabel>
        <Input type="text" value={account} isReadOnly />
      </FormControl>
      <Button onClick={handleRegister}>Register/Login</Button>
    </Box>
  );
};

export default Register;
