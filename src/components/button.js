import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const defaultProps = {
  rounded: 'sm',
  cursor: 'default',
  fontWeight: '700',
  fontFamily: 'Quicksand',
  _hover: {}, _focus: {}, _active: {}
};

export function ButtonShadow({ children, ...rest }) {
  return (
    <Button
      size='sm'
      bg='none'
      border='2px'
      fontSize='md'
      color='adobe.11'
      borderColor='adobe.10'
      { ...defaultProps }
      _hover={{ boxShadow: '4px 4px #BFB9B8' }}
      { ...rest }
    >
      { children }
    </Button>
  );
}

export function ButtonNavbar({ children, url, pathname, ...rest }) {
  return (
    <Button
      as={ Link }
      to={ url }
      size='xs'
      bg='none'
      fontSize='12px'
      boxShadow={ pathname === url ? 'md' : 'none' }
      color={ pathname === url ? 'adobe.11' : 'adobe.3' }
      { ...defaultProps } 
      { ...rest }
    >
      { children }
    </Button>
  );
} 

export function ButtonTab({ children, ...rest }) {
  return (
    <Button
      size='sm'
      bg='none'
      { ...defaultProps }
      { ...rest }
    >
      { children }
    </Button>
  );
}

export const ButtonCancel = forwardRef(( props, ref ) =>
  <Button
    ref={ ref }
    size='sm'
    bg='adobe.9'
    fontSize='md'
    color='adobe.10'
    { ...defaultProps }
    _hover={{ color: 'adobe.11' }} 
    { ...props }
  >
    Cancel
  </Button>
);

export function ButtonAuth({ children, ...rest }) {
  return (
    <Button
      bg='adobe.9'
      color='adobe.10'
      { ...defaultProps }
      _hover={{ color: 'adobe.11' }}
      { ...rest }
    >
      { children }
    </Button>
  );
}