import { Input } from "@chakra-ui/react";

export const InputOutline = props => (
  <Input
    rounded='sm'
    color='adobe.7'
    fontWeight='600'
    borderColor='adobe.1'
    fontFamily='Quicksand'
    _placeholder={{ color: 'adobe.5', fontSize: 'sm' }}
    _hover={{ borderColor: 'adobe.2' }}
    _focus={{ borderColor: 'adobe.4' }}
    { ...props }
  />
);