import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NivoChart from './components/nivo/NivoChart';
import ReactChart from './components/reactchart/ReactChart';
import RechartsChart from './components/recharts/RechartsChart';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/nivo" element={<NivoChart />} />
          <Route path="/reactchart" element={<ReactChart />} />
          <Route path="/recharts" element={<RechartsChart />} />
          <Route exact path="/" element={<NivoChart />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
