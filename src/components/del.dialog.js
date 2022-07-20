import { 
  AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, 
  AlertDialogHeader, AlertDialogOverlay, HStack 
} from "@chakra-ui/react";
import { useRef } from "react";
import { ButtonCancel, ButtonShadow } from "components/button";

export const DelDialog = ({ isOpen, onClose, header }) => {
  const cancelRef = useRef();

  return (
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
            { header }
          </AlertDialogHeader>
          <AlertDialogBody 
            color='adobe.5'
            fontWeight='600' 
          >
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <HStack>
              <ButtonCancel 
                ref={ cancelRef } 
                onClick={ onClose } 
              />
              <ButtonShadow onClick={ onClose }>
                Delete
              </ButtonShadow>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  ); 
}
  