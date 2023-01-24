import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    Button,
    HStack,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  // Replace test data with your own
  const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
  });
  
  
  
  
  export default function Placeholder(props) {
    const bg = useColorModeValue('gray.100', '#202236');
    const color = useColorModeValue('gray.700', '#gray.700');
    return (
      
        <Box bg={bg} w={'full'} minH={'100vh'} mx={'0'} p={'140px 5px'} >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'} color={color}>
            Work in Progress. <br />
            <Text as={'span'} color={'accent'}>
             {props.page} page
            </Text>
          </Heading>
          
          
        </Stack>
      </Box>
    );
  }