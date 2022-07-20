import { useDisclosure } from "@chakra-ui/react";
import { CgTrash } from "react-icons/cg";
import { DelDialog, IconButtonPopoverItem } from "components/common";

export const DelItemDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButtonPopoverItem
        fontSize='19px'
        onClick={ onOpen }
        icon={ <CgTrash /> }
      />

      <DelDialog 
        isOpen={ isOpen } 
        onClose={ onClose } 
        header='Delete project'
      />
    </>
  );
}