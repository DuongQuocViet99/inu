import { 
  Box, Modal, Stack, HStack, TagLabel, ModalBody, SimpleGrid, 
  ModalHeader, ModalFooter, ModalContent, ModalOverlay, 
  useDisclosure, TagCloseButton, ModalCloseButton
} from "@chakra-ui/react";
import { useState } from "react";

import { ButtonCancel, ButtonShadow } from "components/button";
import { AvatarActivate } from "components/avatar";
import { InputOutline } from "components/input";
import FilterToMap from "render/filtertomap";
import TooltipC from "components/tooltip";
import MemberTag from "components/tag";
import TextS from "components/text";
import Map from "render/map";

const listMemberApp = [ 
  'Duong Quoc Viet',
  'Na ru to',
  'Sa su ke',
  'Sa ku ra' 
];

export default function AddMemberDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ name, setName ] = useState( null );
  const [ select, setSelect ] = useState([]);

  return (
    <>
      <ButtonShadow onClick={ onOpen }>
        Add team member
      </ButtonShadow>

      <Modal 
        isOpen={ isOpen } 
        onClose={ onClose }
        motionPreset='slideInBottom'
      >
        <ModalOverlay bg='rgba(89, 89, 89, 0.4)' />
        <ModalContent rounded='xl'>
          <ModalHeader color='adobe.6' fontFamily='Quicksand'>
            Add team member
          </ModalHeader>
          <ModalCloseButton
            color='adobe.10'
            cursor='default'
            _focus
            _hover={{ bg: 'adobe.9' }}
            _active={{ color: 'adobe.11' }}
          />
          <ModalBody>
            <Stack>
              <SimpleGrid columns={ 5 } spacing={ 2 }>
                <Map data={ select } render={( i, k ) => 
                  <TooltipC key={ k } label={ i }> 
                    <MemberTag>
                      <TagLabel>{ i }</TagLabel>
                      <TagCloseButton 
                        _focus 
                        onClick={() => setSelect(
                          [ ...select.slice( 0, k ), 
                            ...select.slice( k + 1 ) ]
                        )}
                      />
                    </MemberTag>
                  </TooltipC>
                }/>
              </SimpleGrid>
              <InputOutline 
                placeholder='member name'
                onChange={ e => {
                  setName( e.target.value );
                }}
              />
            </Stack>
            <Box boxShadow='md'>
              <FilterToMap 
                data={ listMemberApp } 
                condition={ i => i.includes( name ) && name !== '' } 
                render={( i, k ) => 
                  <HStack
                    key={ k } 
                    p={ 2 }
                    cursor='default'
                    _hover={{ boxShadow: 'md' }}
                    onClick={() => {
                      select.every( e => !e.includes( i )) && setSelect([ ...select, i ])
                    }}
                  >
                    <AvatarActivate name={ i } />
                    <TextS>{ i }</TextS>
                  </HStack>
                }
              />
              { 
                listMemberApp.every( i => !i.includes( name ) && name !== null ) && 
                <TextS p={ 2 }>not found</TextS> 
              }
            </Box>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <ButtonCancel onClick={ onClose } />
              <ButtonShadow onClick={ onClose }>
                Add
              </ButtonShadow>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}