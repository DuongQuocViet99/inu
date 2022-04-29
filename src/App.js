import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import theme from 'components/theme';
import Layout from 'pages/layout';
import './App.css';

export default function App() {
  return (
    <>
      <ChakraProvider theme={ theme }>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}