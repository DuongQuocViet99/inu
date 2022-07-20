import { Box, Popover, PopoverTrigger, PopoverContent, PopoverBody, HStack } from "@chakra-ui/react"; 
import { FiX } from "react-icons/fi";
import { 
  DelItemDialog, IconButtonShowMore, DividerVerticalControls, RenameItemDialog 
} from "components/common";
import { IconButtonPopoverItem } from "components/iconbutton";

export const ItemControls = () =>
  <Popover 
    placement='bottom-end'
    closeOnBlur={ false }
  >
    {({ isOpen, onClose }) => (
      <>
        <PopoverTrigger>
          <Box>
            <IconButtonShowMore 
              color={ isOpen ? 'adobe.11' : 'adobe.3' } 
            />
          </Box>
        </PopoverTrigger>
        <PopoverContent
          w='auto'
          rounded='sm'
          bg='adobe.10'
          border='none'
          boxShadow='md'
          _focus
        >
          <PopoverBody p={ 1 }>
            <HStack>
              <RenameItemDialog />
              <DividerVerticalControls />
              <DelItemDialog />
              <DividerVerticalControls />
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