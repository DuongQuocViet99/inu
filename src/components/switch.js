import { Box, Circle, useBoolean } from "@chakra-ui/react";

export const SwitchC = () => {
  const [ bool, setBool ] = useBoolean( false );
  
  return (
    <>
      <Box
        w='31px'
        p={ 0.5 } 
        rounded='full' 
        onClick={ setBool.toggle }
        bg={ bool ? 'adobe.10' : 'adobe.8' } 
      >
        <Circle 
          transition='all 0.2s ease-in-out'
          ml= { bool ? '14px': '0px' }
          size='13px' 
          bg='white' 
        />
      </Box>
    </>
  );
}