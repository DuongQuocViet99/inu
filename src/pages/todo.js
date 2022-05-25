import { Box } from "@chakra-ui/react";
import Process from "components/process";

export default function Todo() {
  return (
    <>
      <Box p={ 6 }>
        <Process color='coolors.3'>review</Process>
        <Process color='#89b0ae'>planning</Process>
        <Process color='coolors.5'>open</Process>
      </Box>
    </>
  );
}