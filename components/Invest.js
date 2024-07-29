import React, { useState, useEffect } from 'react';
import { Box, Input, Button, FormControl, FormLabel, Text, Stack, VStack } from '@chakra-ui/react';

const InvestDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [farmers, setFarmers] = useState([]);

  // Dummy data for farmers
  const dummyFarmers = [
    { name: 'John Doe', amount: 1000, reason: 'Buy seeds', repaymentPeriod: 12, collateral: 'Tractor' },
    { name: 'Jane Smith', amount: 1500, reason: 'Expand farm', repaymentPeriod: 24, collateral: 'Land' },
    { name: 'Mark Johnson', amount: 500, reason: 'Purchase equipment', repaymentPeriod: 6, collateral: 'Cows' },
  ];

  useEffect(() => {
    // Fetch the list of farmers from backend or blockchain (dummy data for now)
    setFarmers(dummyFarmers);
  }, []);

  const handleSearch = () => {
    // Filter farmers based on search term (dummy filter for now)
    const filteredFarmers = dummyFarmers.filter(farmer =>
      farmer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFarmers(filteredFarmers);
  };

  return (
    <Box>
      <FormControl id="search" mb={4}>
        <FormLabel>Search Farmers</FormLabel>
        <Input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter farmer's name or reason" />
      </FormControl>
      <Button onClick={handleSearch} colorScheme="teal" mb={4}>Search</Button>

      <VStack spacing={4}>
        {farmers.map((farmer, index) => (
          <Box key={index} p={4} shadow="md" borderWidth="1px" width="100%">
            <Stack spacing={2}>
              <Text><strong>Name:</strong> {farmer.name}</Text>
              <Text><strong>Loan Amount:</strong> ${farmer.amount}</Text>
              <Text><strong>Reason:</strong> {farmer.reason}</Text>
              <Text><strong>Repayment Period:</strong> {farmer.repaymentPeriod} months</Text>
              <Text><strong>Collateral:</strong> {farmer.collateral}</Text>
              <Button colorScheme="blue">Invest</Button>
            </Stack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default InvestDashboard;
