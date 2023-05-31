import { Box, Button, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import signup from "../assets/signup.png";
import Footer from '../components/Footer';
import logo from "../assets/logo.png";
import {UserContext} from '../context/user';
import {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import { HiEye, HiEyeOff } from 'react-icons/hi';


function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

        const handleTogglePassword = () => {
            setShowPassword(!showPassword);
        };
    const {setUserId, getUserId} = useContext(UserContext)
    const history =  useHistory()
    return (
        <>
        <div style={{height: '700px', display: 'flex', alignItems: 'center'}}>
            <div style={{flex: 2, display: "flex", alignItems: "center", justifyContent: 'center'}}>

                <Box textAlign="center">

                    <div style={{display: "flex", alignItems: "center", marginBottom: "100px"}}>
                        <img src={logo} alt="Logo" style={{width: "60px", marginRight: "20px"}}/>
                        <Heading>LearnRoom</Heading>
                    </div>

                    <form>
                    <FormControl id="email" my="4">
                        <FormLabel>Email:</FormLabel>
                        <Input type="email" name="email" />
                    </FormControl>

                    <FormControl id="password" my="4">
                                    <FormLabel>Password:</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <IconButton
                                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                                onClick={handleTogglePassword}
                                                h="1.75rem"
                                                size="sm"
                                                icon={showPassword ? <HiEyeOff /> : <HiEye />}
                                            />
                                        </InputRightElement>
                                    </InputGroup> 
                                    </FormControl>
                    <Button colorScheme="custom" color="white"  bgColor="#FF796E" rounded="full"  type="submit"  my="4"  onClick={() => {
                        setUserId("1");
                        console.log(getUserId())
                        history.push("/home")
                    }}>Login</Button>

                </form>
                
                <Text fontSize={'14px'}>Don't have an account? <Link fontWeight={'bold'} href="/signup">Sign up</Link></Text>
            </Box>
        </div>

        <div style={{ flex: 3 }}>
            <img src={signup} alt="landing image" style={{ width: '1000px',marginTop:'50px' }} />

        </div>
    </div>
    <Footer /></>
    );
}

export default SignIn;
