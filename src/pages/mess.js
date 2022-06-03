import { Box, HStack, useBoolean } from "@chakra-ui/react";
import { FiPaperclip, FiSend } from "react-icons/fi";

import { IconButtonShadow } from "components/iconbutton";
import { InputMess } from "components/input";
import { useEffect, useRef } from "react";
import MessIb from "components/mess.ib";

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
        p={ 4 }
        pb={ 24 }
        ref={ boxRef }
      >
        <MessIb me>hôm nay trời đẹp</MessIb>
        <MessIb>dung vay</MessIb>
      </Box>
      <HStack
        p={ 4 }
        w='full'
        bg='white'
        bottom={ 0 }
        position='fixed'
      >
        <IconButtonShadow
          icon={ <FiPaperclip /> } 
          onClick={ setPin.toggle }
          color={ pin ? 'adobe.7' : 'adobe.6' }
        />
        <InputMess />
        <IconButtonShadow icon={ <FiSend /> } />
      </HStack>
    </>
  );
}