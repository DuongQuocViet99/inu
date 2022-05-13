import { FiBox, FiMoreVertical } from "react-icons/fi";
import { IconButton } from "@chakra-ui/react";
import { CgMenuMotion } from "react-icons/cg";
import { HiPlus } from "react-icons/hi";

export const IconButtonUnstyled = props => (
  <IconButton
    bg='none'
    color='adobe.4'
    cursor='default'
    _focus _active
    _hover={{ color: 'adobe.5' }}
    { ...props }
  />
);

export const IconButtonDrawer = props => (
  <IconButtonUnstyled
    size='sm'
    fontSize='24px'
    icon={ <CgMenuMotion /> }
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

export const IconButtonNew = props => (
  <IconButtonShadow
    size='sm'
    icon={ <HiPlus /> }
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

export const IconButtonLogo = props => (
  <IconButton
    size='sm'
    rounded='sm'
    bg='adobe.1'
    fontSize='20px'
    color='adobe.4'
    cursor='default'
    icon={ <FiBox /> }
    _hover _active _focus
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