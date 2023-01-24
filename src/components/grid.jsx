import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
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




export default function Grid() {
  const bg = useColorModeValue('gray.100', '#gray.50');
  const color = useColorModeValue('gray.700', '#gray.300');
  return (
    
    <Box  w={'full'} minH={'100vh'} bg={bg} p={'170px 5px' }>
    <Stack spacing={4} as={Container}  maxW={'3xl'} textAlign={'center'}>
      <Heading fontSize={'3xl'}>This is the headline</Heading>
      <Text color={'gray.600'} fontSize={'xl'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </Text>
    </Stack>

    <Container maxW={'6xl'} mt={10}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {features.map((feature) => (
          <HStack key={feature.id} align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>{feature.title}</Text>
              <Text color={color}>{feature.text}</Text>
            </VStack>
          </HStack>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
  );
}