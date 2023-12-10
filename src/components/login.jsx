import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button} from '@chakra-ui/react'
import React, { useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [ show, setShow] = useState(false)
    const [ email, setEmail] = useState();
    const [ password, setPassword] = useState();

    const handleClick = () =>{
    setShow(!show)
    }

    const submitHandler = () =>{

    }
  return (
    <VStack spacing="5px" color="black">
               <FormControl id="first-name" isRequired>
        <FormLabel>Email </FormLabel>
              <Input
             placeholder="Enter Your Email"
             onChange={(e) => setEmail(e.target.value)}
            />
    </FormControl >

    <FormControl id="password" isRequired>
        <FormLabel>
            Password
        </FormLabel>
        <InputGroup>
        <Input
             type={ show? "text"  : "password"}
             placeholder="Enter Your Password"
             onChange={(e) => setPassword(e.target.value)}
            />
            
            <InputRightElement width="4.5rem">
                {
                    show? <FaEye onClick={handleClick} /> : <FaEyeSlash  onClick={handleClick}/>
                }
        </InputRightElement>
        </InputGroup>
     </FormControl >



     <Button
     colorScheme='blue'
     width="100%"
     color="white"
     style={{marginTop:15}}
     onClick={submitHandler}
     >
    Login
     </Button>

    <Button 
     variant="solid"
     colorScheme='red'
     width="100%"
     onClick={() => {
        setEmail("guest@example.com");
        setPassword("123456")
     }}
    >
        Get Guest User Credentials
    </Button>
 </VStack>
  )
}

export default Login
