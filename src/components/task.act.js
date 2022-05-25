import { ModalCloseButton, HStack, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FiEdit2, FiFileText } from "react-icons/fi";
import React from "react";

import { DividerVerticalTabs } from "components/divider";
import TabOptions from "components/tab.options";
import { ButtonTab } from "components/button";
import TabWork from "components/tab.work";
import TabIcon from "components/tab.icon";
import HeadingS from "components/heading";

export default function TaskAct({ isOpen, onClose }) {
  const [ tabIndex, setTabIndex ] = React.useState( 0 );
  
  return (
    <>
      <Modal
        size='3xl'
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
            <ModalHeader p={ 6 }>
              <HeadingS size='md'>
                Task name
              </HeadingS>
            </ModalHeader>
            <ModalBody p={ 0 }>
              <HStack>
                <Spacer />
                <ButtonTab
                  onClick={() => setTabIndex( 0 ) }
                  leftIcon={ <FiFileText fontSize='18px' /> }
                  color={ tabIndex === 0 ? 'adobe.5' : 'adobe.3' }
                >
                  Tasks
                </ButtonTab>
                <DividerVerticalTabs h='18px' />
                <ButtonTab
                  onClick={() => setTabIndex( 1 ) }
                  leftIcon={ <FiEdit2 fontSize='16px'/> }
                  color={ tabIndex === 1 ? 'adobe.5' : 'adobe.3' }
                >
                  Options
                </ButtonTab>
                <Spacer />
              </HStack>
            </ModalBody>
            <ModalFooter>
              <Tabs
                w='full'
                variant='unstyled'
                index={ tabIndex }
                onChange={ index => setTabIndex( index )}
              >  
                <TabPanels>
                  <TabPanel>
                    <TabWork />
                  </TabPanel>
                  <TabPanel>
                    <TabOptions />
                  </TabPanel>
                </TabPanels>

                <TabList>
                  <Spacer />
                  <TabIcon />
                  <TabIcon />
                  <Spacer />
                </TabList>
              </Tabs>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}