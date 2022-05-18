import { Box, Circle, useBoolean } from "@chakra-ui/react";

export default function SwitchS() {
  const [ bool, setBool ] = useBoolean( false );
  
  return (
    <>
      <Box
        w='31px'
        p={ 0.5 } 
        rounded='full' 
        onClick={ setBool.toggle }
        bg={ bool ? 'adobe.6' : 'adobe.2' } 
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