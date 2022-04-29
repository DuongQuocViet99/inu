import { IconButton } from "@chakra-ui/react";
import { CgMenuMotion } from "react-icons/cg";

export default function IconButtonOrigin( props ) {
  return (
    <>
      <IconButton
        cursor='default'
        _focus={{ outline: 'none' }}
        { ...props }
      />
    </>
  );
}

export function IconButtonDrawer( props ) {
  return (
    <>
      <IconButtonOrigin
        size='sm'
        bg='white'
        color='adobe.6'
        fontSize='24px'
        icon={ <CgMenuMotion /> }
        _hover={{ bg: 'adobe.0' }}
        _active={{}}
        { ...props }
      />
    </>
  );
}