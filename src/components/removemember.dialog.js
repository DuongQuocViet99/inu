import { 
  AlertDialog, AlertDialogBody, AlertDialogContent, useDisclosure, 
  AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, HStack,
} from "@chakra-ui/react";
import { CgTrash } from "react-icons/cg";
import { useRef } from "react";

import { ButtonCancel, ButtonShadow } from "components/button";
import { IconButtonControl } from "components/iconbutton";

export default function RemoveMemberDialog({ checkedItems }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <IconButtonControl
        fontSize='19px'
        onClick={ onOpen } 
        icon={ <CgTrash /> }
        disabled={ checkedItems.some(Boolean) ? false : true } 
      />

      <AlertDialog
        isOpen={ isOpen }
        onClose={ onClose }
        leastDestructiveRef={ cancelRef }
      >
        <AlertDialogOverlay bg='rgba(89, 89, 89, 0.4)'>
          <AlertDialogContent 
            rounded='sm'
            fontFamily='Quicksand'
          >
            <AlertDialogHeader color='adobe.6'>
              Remove member
            </AlertDialogHeader>
            <AlertDialogBody fontWeight='500' color='adobe.5'>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <HStack>
                <ButtonCancel ref={ cancelRef } onClick={ onClose } />
                <ButtonShadow onClick={ onClose }>
                  Delete
                </ButtonShadow>
              </HStack>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}