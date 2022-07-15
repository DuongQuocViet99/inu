import { HStack, ModalFooter } from "@chakra-ui/react";
import { ButtonShadow, ButtonCancel } from "components/button";

export const Footer = ({ onClose }) =>
  <ModalFooter>
    <HStack>
      <ButtonCancel onClick={ onClose } />
      <ButtonShadow onClick={ onClose }>Add</ButtonShadow>
    </HStack>
  </ModalFooter>