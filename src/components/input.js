import { Input } from "@chakra-ui/react";

export const InputOutline = props =>
  <Input
    rounded='sm'
    fontSize='sm'
    color='adobe.6'
    fontWeight='600'
    borderColor='adobe.8'
    fontFamily='Quicksand'
    _placeholder={{ color: 'adobe.5' }}
    _hover={{ borderColor: 'adobe.10' }}
    _focus={{ borderColor: 'adobe.11' }}
    { ...props }
  />

export const InputMess = props =>
  <Input
    bg='none'
    rounded='sm'
    border='2px'
    boxShadow='md'
    color='adobe.6'
    fontWeight='600'
    borderColor='adobe.11'
    fontFamily='Quicksand'
    placeholder="Type message"
    _hover _focus
    _placeholder={{ color: 'adobe.6' }}
    { ...props }
  />