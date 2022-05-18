import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ButtonShadow( props ) {
  const { children, ...rest } = props;

  return (
    <>
      <Button
        size='sm'
        bg='white'
        rounded='xs'
        fontSize='md'
        color='adobe.7'
        cursor='default'
        fontFamily='Quicksand'
        border='2px solid #595959'
        _focus _active
        _hover={{ boxShadow: '4px 4px #595959' }}
        { ...rest }
      >
        { children }
      </Button>
    </>
  );
}

export function ButtonSpace( props ) {
  const { children, url, pathname, ...rest } = props;

  return (
    <>
      <Button
        as={ Link }
        to={ url }
        size='xs'
        bg='none'
        rounded='sm'
        fontSize='12px'
        cursor='default'
        fontFamily='Quicksand'
        boxShadow={ pathname === url ? 'md' : 'none' }
        color={ pathname === url ? 'adobe.6' : 'adobe.3' }
        _focus _active _hover 
        { ...rest }
      >
        { children }
      </Button>
    </>
  );
}

export function ButtonTab( props ) {
  const { children, ...rest } = props;

  return (
    <>
      <Button
        size='sm'
        bg='none'
        cursor='default'
        fontFamily='Quicksand'
        _hover _focus _active
        { ...rest }
      >
        { children }
      </Button>
    </>
  );
}