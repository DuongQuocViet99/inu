import { Box, Stack } from "@chakra-ui/react"; 
import { 
  FormControlC, LevelOption, MemberSelect, SwitchC, InputOutline, ButtonShadow 
} from "components/common";

export const OptionsTab = () =>
  <Stack>
    {/* Task name */}
    <FormControlC 
      name='taskname'
      formLabel='task name'
    >
      <InputOutline id='taskname' placeholder="Task name" />
    </FormControlC>
    {/* Duedate */}
    <FormControlC 
      name='duedate'
      formLabel='due date'
    >
      <InputOutline id='duedate' placeholder="Due date" />
    </FormControlC>
    {/* Level */}
    <FormControlC 
      name='level'
      formLabel='level'
    >
      <LevelOption />
    </FormControlC>
    {/* Priority */}
    <FormControlC 
      name='priority'
      formLabel='priority'
      formHelperText='Priority mission'
    >
      <SwitchC />
    </FormControlC>
    {/* Member select */}
    <FormControlC 
      name='assigne'
      formLabel='assigne'
    >
      <MemberSelect />
    </FormControlC>
    {/* Save button */}
    <Box textAlign='right'>
      <ButtonShadow w='min'>
        Save
      </ButtonShadow>
    </Box>
  </Stack>