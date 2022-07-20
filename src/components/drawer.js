import { DrawerOverlay, DrawerContent, useDisclosure, Stack, Drawer, DrawerHeader } from "@chakra-ui/react";
import { IconButtonDrawer, ButtonAuth } from 'components/common';

export const DrawerC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Trigger button */}
      <IconButtonDrawer onClick={ onOpen } />
      
      {/* Dialog */}
      <Drawer
        placement='left'
        isOpen={ isOpen }
        onClose={ onClose }
      >
        <DrawerOverlay bg='rgba(89, 89, 89, 0.4)' />
        <DrawerContent
          h='min'
          m={ 2 }
          mt={ 14 }
          maxW='3xs'
          rounded='md'
        >
          <DrawerHeader p={ 4 }>
            <Stack>
              <ButtonAuth>Sign in</ButtonAuth>
              <ButtonAuth>Sign up</ButtonAuth>
            </Stack>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>    
    </>
  );
}