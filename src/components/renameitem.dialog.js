import { 
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";
import { IconButtonPopoverItem } from "components/iconbutton";
import { InputOutline, ButtonShadow } from "components/common";

export const RenameItemDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <IconButtonPopoverItem
        fontSize='17px'
        onClick={ onOpen }
        icon={ <FiEdit2 /> }
      />

      <Modal 
        isCentered
        isOpen={ isOpen } 
        onClose={ onClose }
        motionPreset='slideInBottom'
      >
        <ModalOverlay bg='rgba(89, 89, 89, 0.4)' />
        <ModalContent 
          rounded='sm'
          fontFamily='Quicksand'
        >
          <ModalCloseButton
            cursor='default'
            color='adobe.10'
            _focus 
            _active={{ color: 'adobe.11' }}
            _hover={{ bg: 'adobe.9' }}
          />
          <ModalHeader color='adobe.7'>
            Rename project
          </ModalHeader>
          <ModalBody>
            <InputOutline placeholder='Project name' />
          </ModalBody>
          <ModalFooter>
            <ButtonShadow>
              Save
            </ButtonShadow>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

  