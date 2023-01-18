import React from 'react';
import { 
  Box
} from '@chakra-ui/react';

import Navbar from '../components/nav';

import Grid from '../components/grid';
import Footer from '../components/footer';
import Testimonial from '../components/testimonial'

import Hero from '../components/Hero'

// const theme= extendTheme({body:'monospace'},)
// import Fonts from '../fonts/fonts';

function Home() {
  return (
    <Box>
    
      <Navbar />
     
  

<Hero/>
     
      
    
      
          <Grid/>
          <Testimonial/>
      <Footer/>
    </Box>
    
  );
}

export default Home;
