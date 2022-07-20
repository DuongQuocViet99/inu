import { Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { ButtonShadow, AddMemberHeader, AddMemberBody, AddMemberFooter, CloseBtn } from "components/common";

export const AddMemberDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      {/* Trigger button */}
      <ButtonShadow onClick={ onOpen }>
        Add team member
      </ButtonShadow>

      {/* Dialog */}
      <Modal 
        isOpen={ isOpen } 
        onClose={ onClose }
        motionPreset='slideInBottom'
      >
        <ModalOverlay bg='rgba(89, 89, 89, 0.4)' />
        <ModalContent rounded='sm'>
          <CloseBtn />
          <AddMemberHeader />
          <AddMemberBody />
          <AddMemberFooter onClose={ onClose } />
        </ModalContent>
      </Modal>
    </>
  );
}