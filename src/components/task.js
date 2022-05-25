import { Center, Grid, GridItem, useDisclosure } from "@chakra-ui/react";

import { AvatarUnstyled } from "components/avatar";
import TaskAct from "components/task.act";
import { CgCheck } from "react-icons/cg";

export default function Task() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem colSpan={ 10 } onClick={ onOpen }>
        <Grid
          gap={ 2 }
          boxShadow='md'
          color='adobe.7'
          alignItems='center' 
          _hover={{ boxShadow: 'base' }}
          templateColumns='repeat(10, 1fr)' 
        >
          <GridItem
            p={ 2 }
            colSpan={ 6 }
            textAlign='left'
          >
            task 1 
          </GridItem>
          <GridItem>
            S
          </GridItem>
          <GridItem>
            <AvatarUnstyled name='duong quoc viet' />
          </GridItem>
          <GridItem>
            1/6/2022
          </GridItem>
          <GridItem>
            <Center fontSize='2xl' color='adobe.6'>
              <CgCheck />
            </Center>
          </GridItem>
        </Grid>
      </GridItem>
      
      <TaskAct 
        isOpen={ isOpen }
        onClose={ onClose }
      />
    </>
  );
}