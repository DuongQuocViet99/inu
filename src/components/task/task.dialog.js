import { 
  ModalOverlay, Spacer, TabList, TabPanel, TabPanels, Tabs, ModalHeader,
  ModalCloseButton, HStack, Modal, ModalBody, ModalContent, ModalFooter, 
} from "@chakra-ui/react";
import { FiEdit2, FiFileText } from "react-icons/fi";
import { useState } from "react";
import { 
  DividerVerticalTabs, OptionsTab, ButtonTab, WorkTab, IconTab, HeadingC 
} from "components/common";

export const TaskDialog = ({ isOpen, onClose }) => {
  const [ tabIndex, setTabIndex ] = useState( 0 );
  
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
            cursor='default'
            color='adobe.10'
            _focus _active
            _hover={{ bg: 'adobe.9' }}
          />
          <ModalHeader p={ 6 }>
            <HeadingC size='md'>
              Task name
            </HeadingC>
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
              <DividerVerticalTabs h='14px' />
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
                  <WorkTab />
                </TabPanel>
                <TabPanel>
                  <OptionsTab />
                </TabPanel>
              </TabPanels>

              <TabList>
                <Spacer />
                <IconTab />
                <IconTab />
                <Spacer />
              </TabList>
            </Tabs>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}