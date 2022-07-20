import { Box, Grid, Stack } from "@chakra-ui/react";
import { DividerHorizontal, HeadingC, Item } from "components/common";

export default function Home() {
  return (
    <>
      <Box p={ 4 }>
        <Stack spacing={ 4 }>
          <HeadingC as='h1' size='md'>
            My project
          </HeadingC>
          <DividerHorizontal maxW='3xs' />
          <Grid templateColumns='repeat(5, 1fr)' gap={ 4 }>
            <Item />
          </Grid>
        </Stack>
      </Box>
    </>
  );
}