import { Box } from "@chakra-ui/react";
import { Process } from "components/process";

export default function Todo() {
  return (
    <>
      <Box p={ 6 }>
        <Process color='coolors.1'>review</Process>
        <Process color='coolors.2'>review</Process>
      </Box>
    </>
  );
}