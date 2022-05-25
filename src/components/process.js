import { Box, Collapse, Grid, GridItem, HStack, Spacer, useDisclosure } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";

import { IconButtonPopoverItem, IconButtonShowMore } from "components/iconbutton";
import PopoverControls from "components/popover.controls";
import { DividerVerticalTabs } from "components/divider";
import ProcessAct from "components/process.act";
import { CgTrash } from "react-icons/cg";
import BadgeS from "components/badge";
import Task from "components/task";

export default function Process({ children, color }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <HStack>
        <Box>
          <PopoverControls whiteTheme>
            <ProcessAct />
            <DividerVerticalTabs />
            <IconButtonPopoverItem
              fontSize='19px'
              icon={ <CgTrash /> }
            />
            <DividerVerticalTabs />
          </PopoverControls>
        </Box>
        <HStack
          p={ 2 }
          w='full'
          rounded='sm'
          boxShadow='base'
          onClick={ onToggle }
        >
          <BadgeS bg={ color }>
            { children }
          </BadgeS>
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

          <Task />
          <Task />
          
        </Grid>
      </Collapse>
    </>
  );
}