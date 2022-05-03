import { Box, Popover, PopoverTrigger, PopoverContent, PopoverBody, HStack } from '@chakra-ui/react';
import { FiEdit2, FiX } from 'react-icons/fi';
import { CgTrash } from 'react-icons/cg';

import { IconButtonPopover, IconButtonPopoverItem } from 'components/iconbutton';
import { DividerVerticalControls } from 'components/divider';

export default function PopoverControls() {
  return (
    <>
      <Popover placement='bottom-end'>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Box>
                <IconButtonPopover
                  transform={ isOpen ? 'rotate(90deg)': 'rotate(0deg)' }
                />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              w='auto'
              bg='adobe.7'
              rounded='sm'
              border='none'
              _focus={{}}
            >
              <PopoverBody p={ 1 }>
                <HStack>
                  <IconButtonPopoverItem
                    fontSize='17px'
                    icon={ <FiEdit2 /> }
                  />
                  <DividerVerticalControls />
                  <IconButtonPopoverItem
                    fontSize='19px'
                    icon={ <CgTrash /> }
                  />
                  <DividerVerticalControls />
                  <IconButtonPopoverItem
                    fontSize='18px'
                    onClick={ onClose }
                    icon={ <FiX /> }
                  />
                </HStack>
              </PopoverBody>
            </PopoverContent>
          </>
        )}        
      </Popover>
    </>
  );
}