import { 
  Box, Popover, PopoverTrigger, PopoverContent, PopoverBody, HStack, FiX, CgTrash,
  IconButtonPopoverItem, IconButtonShowMore, DividerVerticalControls, ProcessAct 
} from "components/common";

export default function ProcessControls() {
  return (
    <>
      <Popover placement='bottom-start' closeOnBlur={ false }>
        {({ isOpen, onClose }) =>
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
                  <ProcessAct />
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
        }        
      </Popover>
    </>
  );
}