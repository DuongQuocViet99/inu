import { Box, Popover, PopoverTrigger, PopoverContent, PopoverBody, HStack } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';

import { IconButtonPopoverItem, IconButtonShowMore } from 'components/iconbutton';

export default function PopoverControls({ children, whiteTheme }) {
  return (
    <>
      <Popover placement='bottom-end' closeOnBlur={ false }>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Box>
                <IconButtonShowMore color={ isOpen ? 'adobe.5' : 'adobe.4' } />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              w='auto'
              rounded='sm'
              border='none'
              boxShadow='md'
              bg={ whiteTheme ? 'white' : 'adobe.7' }
              _focus
            >
              <PopoverBody p={ 1 }>

                <HStack>
                  { children }
                  <IconButtonPopoverItem
                    fontSize='18px'
                    icon={ <FiX /> }
                    onClick={ onClose }
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