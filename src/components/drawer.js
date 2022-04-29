import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, } from '@chakra-ui/react';

import { IconButtonDrawer } from 'components/iconbutton';

export default function DrawerS() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButtonDrawer 
        onClick={ onOpen }
      />
      <Drawer
        placement='left'
        isOpen={ isOpen }
        onClose={ onClose }
      >
        <DrawerOverlay bg='rgba(230, 230, 230, 0.4)' />
        <DrawerContent
          h='xs'
          m={ 2 }
          mt={ 14 }
          maxW='3xs'
          rounded='md'
        >
          <DrawerHeader></DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>    
    </>
  );
}