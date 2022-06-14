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
    color='adobe.11'
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
    color='white'
    cursor='default'
    _focus _active
    _hover={{ bg: 'adobe.9', color: 'adobe.11' }}
    { ...props }
  />
);

export const IconButtonShowMore = props => (
  <IconButtonUnstyled
    size='none'
    fontSize='19px'
    color='adobe.11'
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

export const IconButtonControl = props => (
  <IconButton
    size='sm'
    bg='none'
    rounded='full'
    color='adobe.10'
    cursor='default'
    _focus 
    _hover={{ bg: 'adobe.9' }} 
    _active={{ color: 'adobe.11' }}
    { ...props }
  />
);