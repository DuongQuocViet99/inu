import { FiMoreVertical } from "react-icons/fi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IconButton } from "@chakra-ui/react";

export const IconButtonUnstyled = props => (
  <IconButton
    bg='none'
    cursor='default'
    _hover _focus _active
    { ...props }
  />
);

export const IconButtonDrawer = props => (
  <IconButtonUnstyled
    fontSize='24px'
    color='adobe.10'
    icon={ <CgMenuLeftAlt /> }
    _hover={{ color: 'adobe.11' }}
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
    _focus _active
    _hover={{ boxShadow: 'base' }}
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
    _focus _active
    _hover={{ bg: 'blackAlpha.500', color: 'white' }}
    { ...props }
  />
);

export const IconButtonShowMore = props => (
  <IconButtonUnstyled
    size='none'
    fontSize='19px'
    icon={ <FiMoreVertical /> }
    { ...props }
  />
);

export const IconButtonColor = props => (
  <IconButton
    size='xs'
    color='white'
    fontSize='xl'
    rounded='full'
    cursor='default' 
    _hover _active _focus
    { ...props }
  />
);

export const IconButtonSidebar = props => (
  <IconButton
    size='sm'
    fontSize='20px'
    cursor='default'
    _active _focus
    _hover={{ color: 'adobe.10' }} 
    { ...props }
  />
);