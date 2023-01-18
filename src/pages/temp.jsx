import React, { Children } from 'react';
import {
    Box,
    Flex,
    SimpleGrid,
    Badge,
    Button,
    Text,
    useColorModeValue,
    Center,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    UnorderedList,
    ListItem,
    Image

} from '@chakra-ui/react';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import Stats from '../components/stats';
import Placeholder from '../components/placeholder';
import {  useParams, useLocation  } from 'react-router-dom';

function Temp() {
    const location = useLocation();
    console.log(location)
    return ( <Box>
        <Navbar/>
        <Placeholder page={location.pathname}/ >
        <Stats/>

        <Footer/>
        </Box>
        )
    }


export default Temp;