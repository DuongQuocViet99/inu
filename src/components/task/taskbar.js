import { Center, Grid, GridItem, useDisclosure } from "@chakra-ui/react"; 
import { CgCheck } from "react-icons/cg";
import { AvatarUnstyled, TaskDialog } from "components/common";

export const TaskBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem colSpan={ 10 } onClick={ onOpen }>
        <Grid
          gap={ 2 }
          boxShadow='md'
          color='adobe.6'
          alignItems='center' 
          _hover={{ boxShadow: 'base' }}
          templateColumns='repeat(10, 1fr)' 
        >
          <GridItem
            p={ 2 }
            colSpan={ 6 }
            textAlign='left'
          >
            task name 
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
            <Center fontSize='2xl' color='adobe.5'>
              <CgCheck />
            </Center>
          </GridItem>
        </Grid>
      </GridItem>
      
      <TaskDialog
        isOpen={ isOpen }
        onClose={ onClose }
      />
    </>
  );
}