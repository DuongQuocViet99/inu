import { 
  Box, Popover, PopoverTrigger, PopoverContent, PopoverBody, HStack, FiX, 
  IconButtonPopoverItem, IconButtonShowMore, DividerVerticalControls, FiEdit2, CgTrash
} from "components/common";

export default function ItemControls() {
  return (
    <>
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