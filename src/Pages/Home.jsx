
import React, { useEffect } from 'react'
import { Container, Box, Text, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from "../components/login"
import Signup from '../components/signup'
import { useNavigate } from 'react-router-dom'
const Home = () => {
   const navigate = useNavigate();

   useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user){
      navigate("/chats");

    }
   }, [navigate])
  return (
   <Container maxW="xl" centerContent>
    <Box
     d="flex"
     justifyContent="center"
     p={3}
     w="100%"
     borderRadius="lg"
     m="40px 0 15px 0"
     borderWidth="1px"
     bg="white"
    
    >
     <Text fontSize="4xl" fontFamily="Work sans" textAlign="center">Talk-A-Tive</Text>
    </Box>

    <Box 
    bg="white"
    w="100%"
    borderRadius="lg"
    borderWidth="1px"
    color="black"
    p={4}
    >
     <Tabs variant='soft-rounded' >
  <TabList mb="lem">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
   </Container>
  )
}

export default Home
