import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import theme from 'components/theme';
import Layout from 'pages/layout';
import Home from 'pages/home';
import Todo from 'pages/todo';
import Mess from 'pages/mess';
import Team from 'pages/team';
import './App.css';

export default function App() {
  return (
    <>
      <ChakraProvider theme={ theme }>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path=':projectID/todo' element={ <Todo /> }/>
            <Route path=':projectID/mess' element={ <Mess /> }/>
            <Route path=':projectID/team' element={ <Team /> }/>
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  );
}