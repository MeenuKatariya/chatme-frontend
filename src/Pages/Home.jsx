import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/login";
import Signup from "../components/signup";
import { useNavigate } from "react-router-dom";
import { FaRocketchat } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/chats");
    }
  }, [navigate]);
  return (
    <Container maxW="xl" centerContent>
      {/* <Box
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        borderRadius="lg"
        m="40px 0 15px 0"
        borderWidth="1px"
        bg="white"
      
      >
         <FaRocketchat style={{margin:"0px", fontSize:"40px", color:"#000" }} />
        <Text fontSize="4xl" fontFamily="Work sans" textAlign="center">
          Talk
        </Text>
       
      </Box> */}

      <Box
        bg="white"
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        color="black"
        p={4}
        pt={10}
        mt={55}
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Tabs variant="soft-rounded" colorScheme="black" >
          <TabList mb="lem"  >
            <Tab  _selected={{bg: "white.100", border:"1px solid black", color:"black"}} width="50%">Login</Tab>
            <Tab  _selected={{bg: "white.100", border:"1px solid black", color:"black"}} width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
