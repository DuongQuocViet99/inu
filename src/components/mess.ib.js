import { Box, HStack, Spacer } from "@chakra-ui/react";

export const MessIb = ({ me, children }) =>
  <HStack>
    { me && <Spacer /> }
    <Box
      p={ 2 }
      maxW='md'
      rounded='sm'
      color='white'
      fontWeight='500'
      fontFamily='Quicksand'
      bg={ me ? 'adobe.7' : 'adobe.11' } 
    >
      { children }
    </Box>
    { !me && <Spacer /> }
  </HStack>