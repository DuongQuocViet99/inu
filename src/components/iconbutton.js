import { IconButton } from "@chakra-ui/react";
import { CgMenuMotion } from "react-icons/cg";
import { HiPlus } from "react-icons/hi";

export const IconButtonDrawer = props => (
  <IconButton
    size='sm'
    bg='white'
    color='adobe.6'
    fontSize='24px'
    cursor='default'
    icon={ <CgMenuMotion /> }
    _hover={{ bg: 'adobe.0' }}
    _focus={{ outline: 'none' }}
    _active={{}}
    { ...props }
  />
);

export const IconButtonShadow = props => (
  <IconButton
    bg='white'
    boxShadow='md'
    color='adobe.6'
    fontSize='18px'
    cursor='default'
    _hover={{ boxShadow: 'base' }}
    _focus={{ outline: 'none' }}
    _active={{}}
    { ...props }
  />
);

export const IconButtonNew = props => (
  <IconButtonShadow
    size='sm'
    icon={ <HiPlus /> }
    { ...props }
  />
);