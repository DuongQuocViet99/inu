import { ChakraProvider } from '@chakra-ui/react';

import theme from 'components/theme';
import './App.css';

export default function App() {
  return (
    <>
      <ChakraProvider theme={ theme }>
        
      </ChakraProvider>
    </>
  );
}