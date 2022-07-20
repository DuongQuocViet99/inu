import { useDisclosure } from "@chakra-ui/react";
import { CgTrash } from "react-icons/cg";
import { DelDialog, IconButtonControl } from "components/common";

export const RemoveMemberDialog = ({ checkedItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButtonControl
        fontSize='19px'
        onClick={ onOpen } 
        icon={ <CgTrash /> }
        disabled={ checkedItems.some(Boolean) ? false : true } 
      />

      <DelDialog 
        isOpen={ isOpen } 
        onClose={ onClose } 
        header='Remove member'
      />
    </>
  );
}