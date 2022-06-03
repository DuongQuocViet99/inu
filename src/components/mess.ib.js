import { Box, HStack, Spacer } from "@chakra-ui/react";

export default function MessIb({ me, children }) {
  return (
    <>
      <HStack>
        { me && <Spacer /> }
        <Box
          p={ 3 }
          maxW='md'
          rounded='sm'
          color='white'
          fontWeight='500'
          fontFamily='Quicksand'
          bg={ me ? 'adobe.7' : 'adobe.6' } 
        >
          { children }
        </Box>
        { !me && <Spacer /> }
      </HStack>
    </>
  );
}