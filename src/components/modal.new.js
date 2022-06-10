import * as C from '@chakra-ui/react';

import { ButtonShadow } from 'components/button';
import { InputOutline } from 'components/input';

export default function New() {
  const { isOpen, onOpen, onClose } = C.useDisclosure();

  return (
    <>
      <ButtonShadow onClick={ onOpen }>
        New project
      </ButtonShadow>

      <C.Modal
        size='xl'
        isCentered
        isOpen={ isOpen } 
        onClose={ onClose }
        motionPreset='slideInBottom'
      >
        <C.ModalOverlay bg='rgba(89, 89, 89, 0.4)' />
        <C.ModalContent rounded='sm'>
          <C.ModalCloseButton
            _focus={{}}
            color='adobe.5'
          />
          <C.ModalHeader
            color='adobe.7'
            fontFamily='Quicksand'
          >
            New project
          </C.ModalHeader>
          <C.ModalBody>
            <InputOutline placeholder='Project name' />
          </C.ModalBody>
          <C.ModalFooter>
            <ButtonShadow onClick={ onClose }>
              Create
            </ButtonShadow>
          </C.ModalFooter>
        </C.ModalContent>
      </C.Modal>
    </>
  );
}