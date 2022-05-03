import { Button } from "@chakra-ui/react";

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
  const { children, ...rest } = props;

  return (
    <>
      <Button
        size='xs'
        bg='none'
        fontSize='12px'
        color='adobe.3'
        cursor='default'
        fontFamily='Quicksand'
        _focus _active
        _hover={{ color: 'adobe.4' }} 
        { ...rest }
      >
        { children }
      </Button>
    </>
  );
}