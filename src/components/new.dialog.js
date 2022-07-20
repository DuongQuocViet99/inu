import { 
  Modal, ModalHeader, ModalOverlay, ModalBody, ModalContent, ModalFooter, ModalCloseButton, useDisclosure
} from '@chakra-ui/react';
import { ButtonShadow, InputOutline } from 'components/common';

export const New = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ButtonShadow onClick={ onOpen }>
        New project
      </ButtonShadow>

      <Modal
        isCentered
        isOpen={ isOpen } 
        onClose={ onClose }
        motionPreset='slideInBottom'
      >
        <ModalOverlay bg='rgba(89, 89, 89, 0.4)' />
        <ModalContent rounded='sm'>
          <ModalCloseButton
            color='adobe.10'
            _focus _active
            _hover={{ bg: 'adobe.9' }}
          />
          <ModalHeader
            color='adobe.7'
            fontFamily='Quicksand'
          >
            New project
          </ModalHeader>
          <ModalBody>
            <InputOutline placeholder='Project name' />
          </ModalBody>
          <ModalFooter>
            <ButtonShadow onClick={ onClose }>
              Create
            </ButtonShadow>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}