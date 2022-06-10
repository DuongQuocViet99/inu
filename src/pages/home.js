import { Box, Grid, Stack } from "@chakra-ui/react";

import { DividerHorizontal } from "components/divider";
import HeadingS from "components/heading";
import Item from "components/item";

export default function Home() {
  return (
    <>
      <Box p={ 4 }>
        <Stack spacing={ 4 }>
          <HeadingS as='h1' size='md'>
            My project
          </HeadingS>
          <DividerHorizontal maxW='xs' />
          <Grid templateColumns='repeat(5, 1fr)' gap={ 4 }>
            <Item />
          </Grid>
        </Stack>
      </Box>
    </>
  );
}