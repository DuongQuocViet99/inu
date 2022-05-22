import { Avatar } from "@chakra-ui/react";

export const AvatarUnstyled = ({ name }) => (
  <Avatar
    name={ name }
    bg='none'
    size='none'
    color='adobe.6'
    fontWeight='700' 
  />
)

export const AvatarActivate = ({ name }) => (
  <Avatar
    name={ name }
    size='sm'
    bg='adobe.5'
    color='white'
    cursor='default'
    fontWeight='700'
    fontFamily='Quicksand'
    _hover={{ bg: 'adobe.7' }}
  />
)