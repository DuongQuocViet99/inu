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
        _hover={{ boxShadow: '4px 4px #595959' }}
        _focus={{}}
        _active={{}}
        { ...rest }
      >
        { children }
      </Button>
    </>
  );
}