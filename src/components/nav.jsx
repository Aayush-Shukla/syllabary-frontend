import {
  Box,
  Flex,
  Link,
  Button,

  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
  Collapse,
  HStack,
  useColorMode,
  Center,
  IconButton,
  color,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

import {Link as RouterLink} from "react-router-dom";

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/images/logo.png'

import {  useParams, useLocation  } from 'react-router-dom';


const Links = [{
  label: 'WHAT WE DO',
  path: '/'
}, {
  label: 'HOW WE DO IT',
  path: '/how'
}, {
  label: 'COURSES',
  path: '/courses'
},{
  label: 'PLANS',
  path: '/plans'
},
{
  label: 'OUR TEAM',
  path: '/team'
},{
  label: 'CONTACT',
  path: '/contact'
},
];

const NavLink = ({ children, font }) => (
  
  <Link  as={RouterLink}
  to={children.path}
    px={2}
    py={1}
    rounded={'md'}
    fontWeight={font.wt} 
    color={ font.color}
    _hover={{
      textDecoration: 'none',
      color: 'teal.400',
    }}
    >
    {children.label}
  </Link>
);

export default function Nav() {

  const { isOpen, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex
      zIndex={12}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        
        width={'100%'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        display={{ base: 'flex', md: 'none' }}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Center alignContent={'center'}></Center>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <Center alignContent={'center'}>
          
         {colorMode === 'light' ? <Image src={logo} width="50px" height="50px"  /> : <Image src={logo} boxSize={50} pt={1}   />}
       
        </Center> 
        </Flex>
        
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
          
        
            
       
      </Flex>
      <DesktopNav />

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}


const DesktopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { page } = useParams();
  const location = useLocation();
  console.log(location.pathname);
  const bg=useColorModeValue('white', 'gray.800')
  return (
    <>
   
      {console.log(page)}
      <Box zIndex={12} bg={bg} left={'15%'}  px={4} position={'fixed'} width={'70%'} m={'2rem'} display={{ base: 'none', md: 'block' }} borderRadius={'70px'} border={'2px solid #44b499'}> 
        <Flex h={83} alignItems={'center'} justifyContent={'space-between'}>
        
          <Box mx={'10px'}> <Image src={logo} boxSize={50} /> </Box>

          

          <Stack direction={'row'} alignItems={'center'}>
          
         
          <HStack spacing={8} alignItems={'center'} >
          
            <HStack
              as={'nav'}
              spacing={9}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => 

                location.pathname===link.path? (<NavLink key={link.path} current={location.pathname} font={{color: 'accent', wt:'900'}} >{link}</NavLink>) : (<NavLink key={link.path} current={location.pathname} font={{color: 'gray.500', wt:'400'}} >{link}</NavLink>)

                
              )}
            </HStack>
          </HStack>
          

                
                
                
           


          </Stack>
          <Flex alignItems={'center'}>                                           {/* remove the ML if the register button is uncommented */}
            <Stack direction={'row'} spacing={7}>
            {/* <Button
            display={{ base: 'none', md: 'none-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'accent'}
            width={'9em'}
            borderRadius={'4px'}
            
            href={'#'}
            _hover={{
              bg: '#1F51FF',
            }}>
            Register
          </Button> */}
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}


const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4} pt={15}
      display={{ md: 'none' }}>
      {Links.map((link) => (
        <MobileNavItem key={link.path} >{link}</MobileNavItem>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const { isOpen, onToggle } = useDisclosure();
  // {console.log(children,href,label)}
  return (
    
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={RouterLink}
        to={children.path ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {children.label}
        </Text>
        
      </Flex>

      
    </Stack>
  );
};
