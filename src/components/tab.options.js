import { Box, Stack } from "@chakra-ui/react";

import FormControlS from "components/formcontrol";
import { ButtonShadow } from "components/button";
import { InputOutline } from "components/input";
import UserOption from "components/user.option";
import SwitchS from "components/switch";

export default function TabOptions() {
  return(
    <>
      <Stack>
        <FormControlS 
          name='taskname' 
          formLabel='task name'
        >
          <InputOutline id='taskname' placeholder="Task name" />
        </FormControlS>

        <FormControlS 
          name='duedate'
          formLabel='due date'
        >
          <InputOutline id='duedate' placeholder="Due date" />
        </FormControlS>

        <FormControlS 
          name='priority'
          formLabel='priority'
          formHelperText='Priority mission'
        >
          <SwitchS />
        </FormControlS>

        <FormControlS 
          name='assigne'
          formLabel='assigne'
        >
          <UserOption />
        </FormControlS>
        <Box textAlign='right'>
          <ButtonShadow w='min'>
            Save
          </ButtonShadow>
        </Box>
      </Stack>
    </>
  );
}