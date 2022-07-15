import { ModalCloseButton } from "@chakra-ui/react";

export const CloseBtn = () =>
  <ModalCloseButton
    color='adobe.10'
    cursor='default'
    _focus
    _hover={{ bg: 'adobe.9' }}
    _active={{ color: 'adobe.11' }}
  />