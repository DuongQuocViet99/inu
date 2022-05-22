import { CloseButton } from "@chakra-ui/react";

export default function CloseBtn( props ) {
  return (
    <>
      <CloseButton
        rounded='full'
        color='adobe.6'
        cursor='default'
        _focus _active 
        _hover={{ color: 'adobe.5' }}
        { ...props }
      />
    </>
  );
}