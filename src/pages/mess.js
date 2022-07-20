import { Box, HStack, useBoolean } from "@chakra-ui/react";
import { FiPaperclip, FiSend } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { IconButtonShadow, InputMess, MessIb } from "components/common";

export default function Mess() {
  const [ pin, setPin ] = useBoolean();
  const boxRef = useRef( null );
  useEffect(() => {
    boxRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  }, [ boxRef ]);

  return (
    <>
      <Box
        p={ 6 }
        pb={ 24 }
        ref={ boxRef }
      >
        <MessIb me>hôm nay trời đẹp</MessIb>
        <MessIb>dung vay</MessIb>
        
        <HStack
          w='full'
          py={ 4 }
          px={ 20 }
          right={ 0 }
          bottom={ 0 }
          position='fixed'
        >
          <IconButtonShadow
            icon={ <FiPaperclip /> } 
            onClick={ setPin.toggle }
            color={ pin ? 'adobe.11' : 'adobe.3' }
          />
          <InputMess />
          <IconButtonShadow icon={ <FiSend /> } />
        </HStack>
      </Box>
    </>
  );
}