import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"
import MyChart from '../components/MyChart'
import ApplyLoan from '../components/ApplyLoan'
import InvestDashboard from '../components/Invest'
export default function Dashboard() {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    const [currentTab,setCurrentTab] = useState(1)
    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <Flex
                w={["100%", "100%", "10%", "15%", "15%"]}
                flexDir="column"
                alignItems="center"
                backgroundColor="#020202"
                color="#fff"
            >
                <Flex
                    flexDir="column"
                    h={[null, null, "100vh"]}
                    justifyContent="space-between"
                >
                    <Flex
                        flexDir="column"
                        as="nav"
                    >
                        <Heading
                            mt={50}
                            mb={[25, 50, 100]}
                            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                            alignSelf="center"
                            letterSpacing="tight"
                        >
                            AgriFinance<br></br>
                            
                        </Heading>
                        <Flex
                            flexDir={["row", "row", "column", "column", "column"]}
                            align={["center", "center", "center", "flex-start", "flex-start"]}
                            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                            justifyContent="center"
                        >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]} onClick={()=>{setCurrentTab(1)}}>
                                    <Text className="active">Home</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiPieChart} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}onClick={()=>{setCurrentTab(2)}}>
                                    <Text>Invest</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiDollarSign} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text>Wallet</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiBox} fontSize="2xl" /></Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]} onClick={()=>{setCurrentTab(4)}}>
                                    <Text>New Loan</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        <Avatar my={2} src="av.png" />
                        <Text textAlign="center">Sanya </Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* Column 2 */}
            {currentTab==1 && (<Flex
                w={["100%", "100%", "60%", "60%", "55%"]}
                p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Heading
                    fontWeight="normal"
                    mb={4}
                    letterSpacing="tight"
                >
                    Welcome back, <Flex display="inline-flex" fontWeight="bold">Sanya </Flex>
                </Heading>
                <Text color="gray" fontSize="sm">My Balance</Text>
                <Text fontWeight="bold" fontSize="2xl">Rs. 5,750.20</Text>
                
                <Flex justifyContent="space-between" mt={8}>
                    <Flex align="flex-end">
                        <Heading as="h2" size="lg" letterSpacing="tight">Transactions</Heading>
                        <Text fontSize="small" color="gray" ml={4}>July 2024</Text>
                    </Flex>
                    <IconButton icon={<FiCalendar />} />
                </Flex>
                <Flex flexDir="column">
                    <Flex overflow="auto">
                        <Table variant="unstyled" mt={4}>
                            <Thead>
                                <Tr color="gray">
                                    <Th>Name of transaction</Th>
                                    <Th>Category</Th>
                                    
                                    <Th isNumeric>Amount</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="https://www.perkypet.com/media/Articles/Perky-Pet/Save-Our-Birds_1.jpg" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">Transaction-1</Heading>
                                                <Text fontSize="sm" color="gray">Apr 24, 2023 at 1:40pm</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Pesticides</Td>
                                   
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">Rs. 242</Text>.00</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="https://5.imimg.com/data5/XS/ER/ES/SELLER-7285723/irrigation-pump-set.jpg" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">Transaction-2</Heading>
                                                <Text fontSize="sm" color="gray">Apr 22, 2023 at 2:43pm</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Irrigation pump </Td>
                                  
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">Rs. 32</Text>.00</Td>
                                </Tr>
                                
                                {display == 'show' &&
                                    <>
                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar size="sm" mr={2} src="" />
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">transaction 3</Heading>
                                                        <Text fontSize="sm" color="gray">Apr 12, 2023 at 9:40pm</Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Electronic Devices</Td>
                                            <Td isNumeric><Text fontWeight="bold" display="inline-table">Rs. 242</Text>.00</Td>
                                        </Tr>
                                        
                                    </>
                                }
                            </Tbody>
                        </Table>
                    </Flex>
                    <Flex align="center">
                        <Divider />
                        <IconButton
                            icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />}
                            onClick={() => {
                                if (display == 'show') {
                                    changeDisplay('none')
                                } else {
                                    changeDisplay('show')
                                }
                            }}
                        />
                        <Divider />
                    </Flex>
                </Flex>
            </Flex>)}
            {currentTab==2 && (
              <Flex
              w={["100%", "100%", "60%", "60%", "55%"]}
              p="3%"
              flexDir="column"
              overflow="auto"
              minH="100vh"
          >
              <InvestDashboard/>
              
          </Flex>)}

            {currentTab==4 && (<Flex
              w={["100%", "100%", "60%", "60%", "55%"]}
              p="3%"
              flexDir="column"
              overflow="auto"
              minH="100vh"
          >
              <Heading
                  fontWeight="normal"
                  mb={2}
                  letterSpacing="tight"
              >
                 Apply for New Loan 
              </Heading>
              <Text color="gray" fontSize="sm">My Balance</Text>
              <Text fontWeight="bold" fontSize="2xl">Rs. 5,750.20</Text>
              
              <Flex justifyContent="space-between" mt={8}>
                
                 <ApplyLoan/>
              </Flex>
             
          </Flex>)}

            {/* Column 3 */}
            <Flex
                w={["100%", "100%", "30%"]}
                bgColor="#F5F5F5" p="3%"
                flexDir="column"
                overflow="auto"
                minW={[null, null, "300px", "300px", "400px"]}
            >
                <Flex alignContent="center">
                    <InputGroup bgColor="#fff" mb={4} border="none" borderColor="#fff" borderRadius="10px" mr={2}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<FiSearch color="gray" />}
                        />
                        <Input type="number" placeholder="Search" borderRadius="10px" />
                    </InputGroup>
                    <IconButton icon={<FiBell />} fontSize="sm" bgColor="#fff" borderRadius="50%" p="10px" />
                    <Flex
                        w={30}
                        h={25}
                        bgColor="#B57295"
                        borderRadius="50%"
                        color="#fff"
                        align="center"
                        justify="center"
                        ml="-3"
                        mt="-2"
                        zIndex="100"
                        fontSize="xs"
                    >
                        2
                    </Flex>
                </Flex>
            
                <Flex justifyContent="center" mt={2}>
                    <Button bgColor={value == 1 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(1)} />
                    <Button bgColor={value == 2 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(2)} />
                    <Button bgColor={value == 3 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(3)} />
                </Flex>
                <Flex flexDir="column" my={4}>
                    <Flex justify="space-between" mb={2}>
                        <Text>Balance</Text>
                        <Text fontWeight="bold"></Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text>Credit Limit</Text>
                        <Text fontWeight="bold"></Text>
                    </Flex>
                </Flex>
               
                
                <Button mt={4} bgColor="blackAlpha.900" color="#fff" p={7} borderRadius={15}>View Recommendations</Button>
            </Flex>
        </Flex>
    )
}