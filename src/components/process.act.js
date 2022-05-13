import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Stack, HStack } from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";

import { IconButtonPopoverItem } from "components/iconbutton";
import { ButtonShadow } from "components/button";
import { InputOutline } from "components/input";
import ColorList from "components/colorlist";
import TextS from "components/text";

export default function ProcessAct() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButtonPopoverItem
        fontSize='17px'
        onClick={ onOpen }
        icon={ <FiEdit2 /> }
      />

      <Modal 
        size='md'
        isCentered
        isOpen={ isOpen } 
        onClose={ onClose }
        motionPreset='slideInBottom'
      >
        <ModalOverlay bg='rgba(89, 89, 89, 0.4)' />
        <ModalContent rounded='sm'>
          <ModalCloseButton 
            _focus
            color='adobe.5'
          />
          <ModalHeader
            color='adobe.7'
            fontFamily='Quicksand'
          >
          </ModalHeader>
          <ModalBody p={ 6 }>
            <Stack spacing={ 4 }>
              <HStack spacing={ 4 }>
                <TextS>Title</TextS>
                <InputOutline defaultValue='Open' />
              </HStack>
              <HStack>
                <TextS flex={ 1 }>Color</TextS>
                <ColorList />
              </HStack>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <ButtonShadow onClick={ onClose }>Save</ButtonShadow>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}