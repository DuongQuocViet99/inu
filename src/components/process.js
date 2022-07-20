import { Box, Collapse, Grid, GridItem, HStack, Spacer, useDisclosure } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { IconButtonShowMore, ProcessControls, BadgeC, TaskBar } from "components/common";

export const Process = ({ children, color }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <HStack>
        <Box>
          <ProcessControls />
        </Box>
        <HStack
          p={ 2 }
          w='full'
          rounded='sm'
          boxShadow='base'
          onClick={ onToggle }
        >
          <BadgeC bg={ color }>
            { children }
          </BadgeC>
          <Spacer />
          <IconButtonShowMore
            icon={ <FiChevronRight /> } 
            transform={ isOpen && 'rotate(90deg)' }
          />
        </HStack>
      </HStack>

      <Collapse in={ isOpen } animateOpacity>
        <Grid
          p={ 7 }
          gap={ 2 }
          fontSize='xs'
          color='adobe.6'
          fontWeight='600'
          textAlign='center'
          fontFamily='Quicksand'
          templateColumns='repeat(10, 1fr)'
        >
          <GridItem colSpan={ 6 } />
          <GridItem>LEVEL</GridItem>
          <GridItem>ASSIGNE</GridItem>
          <GridItem>DUE DATE</GridItem>
          <GridItem>PRIORITY</GridItem>

          <TaskBar />
          <TaskBar />
          
        </Grid>
      </Collapse>
    </>
  );
}