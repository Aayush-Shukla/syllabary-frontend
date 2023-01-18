import React from 'react';
import {
  ChakraProvider,
  
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/home';
import Navbar from './components/nav';
import theme from './components/customtheme.js';
import Temp from './pages/temp'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
            <Router>
        <Routes>  
          <Route path="/:page" element={<Navbar />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/what" element={<Temp />} />
          <Route exact path="/how" element={<Temp />} />
          <Route exact path="/courses" element={<Temp />} />
          <Route exact path="/plans" element={<Temp />} />
          <Route exact path="/team" element={<Temp />} />
          <Route exact path="/contact" element={<Temp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
