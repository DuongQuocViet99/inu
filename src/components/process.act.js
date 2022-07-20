import { 
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody, ModalCloseButton, useDisclosure, Stack, HStack 
} from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";

import { ButtonShadow, InputOutline, ColorList, TextC } from "components/common";
import { IconButtonPopoverItem } from "components/iconbutton";

export const ProcessAct = () => {
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
            _focus _active
            color='adobe.10'
            _hover={{ bg: 'adobe.9' }}
          />
          <ModalHeader
            color='adobe.7'
            fontFamily='Quicksand'
          >
          </ModalHeader>
          <ModalBody p={ 6 }>
            <Stack spacing={ 4 }>
              <HStack spacing={ 4 }>
                <TextC>Title</TextC>
                <InputOutline defaultValue='Open' />
              </HStack>
              <HStack>
                <TextC flex={ 1 }>Color</TextC>
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