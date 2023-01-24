import {
  Box,
  Container,
  Text,
  Stack,
  HStack,
  Center,
  Flex,
  Button,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import ring from '../assets/svgs/Vector.svg';
import hero from '../assets/images/hero-tp.png'
import circle from '../assets/svgs/Vector-1.svg';

 
export default function Hero() {
  const bg = useColorModeValue('white', '#202236');
  return (
    <Box w={'full'} minH={'100vh'} m='auto' p={{base: '25px 5px', sm:'170px 5px' }} bg={bg}>
      <Image src={ring} mx={'auto'} mt={-20} position={'absolute'}  display={{ base: 'none', sm: 'block' }} zIndex={1} />
      <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>

      </Stack>

      <Box position={'relative'}>
        <Container maxW={'7xl'} zIndex={10} position={'relative'} pt={2}>
          <Image
            src={circle}
            mt={400}
            ml={-20}
            position={'absolute'}
            zIndex={-1}
          />
          <Stack direction={{ base: 'column', lg: 'row' }}>


          <Image  src= {hero} mx={'auto'} display={{ base: 'block', sm: 'none' }} boxSize={{ base: '70vw', md: '500px' }}/>
            <Stack
              flex={1}
              justify={{ lg: 'center' }}
              py={{ base: 4, md: 20, xl: 15 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                
                {/* <Text fontSize={{ base: '3xl', md: '5xl' }}>is</Text>
                </HStack>
                <Text mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                  the annual symposium
                </Text> */}
                <Text fontSize={{ base: '3xl', md: '5xl' }}>
                Start learning from
                </Text>
                <Text color={'accent'} fontSize={{ base: '3xl', md: '5xl' }}>
                the worlds best tutors
                </Text>

                <Text fontSize={'xl'}>
                Start your learning journey from the best tutor's around the world!
                </Text>

                <Button
              mt={15}
                size='md'
                height='48px'
                width='200px'
                border='2px'
                borderColor='accent'
                borderRadius={4}
                zIndex={1}
                color='accent'
                _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('accent','accent'),
                color:'white'
              }}

              >
                Learn Now
              </Button>
              </Box>
            </Stack>
           


            <Image  src= {hero}  display={{ base: 'none', sm: 'block' }} boxSize={{ base: '70vw', md: '500px' }}/>

          
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
