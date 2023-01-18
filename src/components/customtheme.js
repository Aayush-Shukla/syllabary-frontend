// importing the required chakra libraries
import { extendTheme } from '@chakra-ui/react';
import "@fontsource/plus-jakarta-sans";
// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra

const theme = extendTheme({
  fonts: {
    body: 'Plus Jakarta Sans',
    heading: 'Plus Jakarta Sans',
    
  },
  colors: {
    accent: '#2c9f90',
  },
  
});

// export our theme
export default theme;
