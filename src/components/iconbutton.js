import { FiChevronRight } from "react-icons/fi";
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
    _focus={{}}
    _active={{}}
    _hover={{ bg: 'adobe.0' }}
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
    _focus={{}}
    _active={{}}
    _hover={{ boxShadow: 'base' }}
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

export const IconButtonPopover = props => (
  <IconButton
    size='sm'
    bg='none'
    fontSize='xl'
    color='adobe.6'
    cursor='default'
    icon={ <FiChevronRight /> }
    _focus={{}}
    _hover={{}}
    _active={{}}
    { ...props }
  />
);

export const IconButtonPopoverItem = props => (
  <IconButton
    size='xs'
    bg='none'
    rounded='sm'
    color='adobe.3'
    cursor='default'
    _focus={{}}
    _hover={{ bg: 'blackAlpha.500', color: 'white' }}
    _active={{}}
    { ...props }
  />
);