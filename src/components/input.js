import { Input } from "@chakra-ui/react";

export const InputOutline = props => (
  <Input
    rounded='sm'
    fontSize='sm'
    color='adobe.7'
    fontWeight='600'
    borderColor='adobe.1'
    fontFamily='Quicksand'
    _placeholder={{ color: 'adobe.5' }}
    _hover={{ borderColor: 'adobe.2' }}
    _focus={{ borderColor: 'adobe.4' }}
    { ...props }
  />
);

export const InputMess = props => (
  <Input
    bg='white'
    rounded='sm'
    border='none'
    boxShadow='md'
    color='adobe.7'
    fontWeight='600'
    fontFamily='Quicksand'
    placeholder="Type message"
    _hover={{ bg: 'adobe.1' }}
    _placeholder={{ color: 'adobe.6' }}
    _focus={{ bg: 'white', border: '2px', borderColor: 'adobe.3' }}
    { ...props }
  />
);