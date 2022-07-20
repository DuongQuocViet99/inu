import { Circle, CloseButton, HStack, SlideFade, useDisclosure } from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";
import { AvatarActivate } from "components/common";

export const MemberSelect = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <HStack>
        <Circle
          onClick={ onToggle }
          size='40px' 
          color='adobe.6'
          cursor='pointer'
          border='1px dashed'
          _hover={{ color: 'adobe.7' }}
        >
          <HiPlus />
        </Circle>
        <SlideFade in={ isOpen } offsetY='20px'>
          <HStack
            p={ 1 }
            border='1px'
            spacing={ 1 }
            rounded='full'
            borderColor='adobe.2' 
          >
            <AvatarActivate name='na ru to' />
            <AvatarActivate name='sa su ke' />
            <CloseButton 
              cursor='default'
              color='adobe.10'
              onClick={ onClose } 
              _focus _active
              _hover={{ color: 'adobe.11' }} 
            />
          </HStack>
        </SlideFade>
      </HStack>
    </>
  );
}