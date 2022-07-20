import { FiChevronRight, FiMoreVertical } from "react-icons/fi"; 
import { CgMenuLeftAlt } from "react-icons/cg"; 
import { IconButton } from "@chakra-ui/react";
import { forwardRef } from "react";

const defaultProps = {
  cursor: 'default',
  _hover: {}, _focus: {}, _active: {}
};

export function IconButtonDrawer( props ) {
  return (
    <IconButton
      bg='none'
      fontSize='24px'
      color='adobe.10'
      icon={ <CgMenuLeftAlt /> }
      { ...defaultProps }
      _hover={{ color: 'adobe.11' }}
      { ...props }
    />
  );
}

export function IconButtonShadow( props ) {
  return (
    <IconButton
      bg='white'
      boxShadow='md'
      fontSize='18px'
      color='adobe.11'
      { ...defaultProps }
      _hover={{ boxShadow: 'base' }}
      { ...props }
    />
  );
}

export const IconButtonPopoverItem = forwardRef(( props, ref ) => 
  <IconButton
    ref={ ref }
    size='xs'
    bg='none'
    rounded='sm'
    color='white'
    { ...defaultProps }
    _hover={{ bg: 'adobe.9', color: 'adobe.11' }}
    { ...props }
  />
)

export function IconButtonShowMore( props ) {
  return (
    <IconButton
      bg='none'
      size='none'
      fontSize='19px'
      color='adobe.11'
      icon={ <FiMoreVertical /> }
      { ...defaultProps }
      { ...props }
    />
  );
}

export function IconButtonColor( props ) {
  return (
    <IconButton
      size='xs'
      color='white'
      fontSize='xl'
      rounded='full'
      { ...defaultProps }
      _hover={{ border: '2px', borderColor: 'white' }} 
      { ...props }
    />
  );
}

export function IconButtonSidebar( props ) {
  return (
    <IconButton
      size='sm'
      fontSize='20px'
      { ...defaultProps }
      _hover={{ color: 'adobe.10' }} 
      { ...props }
    />
  );
}

export function IconButtonControl( props ) {
  return (
    <IconButton
      size='sm'
      bg='none'
      rounded='full'
      color='adobe.10'
      { ...defaultProps }
      _hover={{ bg: 'adobe.9' }} 
      _active={{ color: 'adobe.11' }}
      { ...props }
    />
  );
}

export function IconButtonShowMoreChevron( props ) {
  return (
    <IconButton
      size='sm'
      bg='none'
      rounded='full'
      fontSize='2xl'
      color='adobe.11'
      icon={ <FiChevronRight /> }
      { ...defaultProps }
      _hover={{ bg: 'adobe.9' }}
      { ...props }
    />
  );
}