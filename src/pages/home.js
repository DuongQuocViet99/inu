import { Container, Grid, Stack } from "@chakra-ui/react";

import { DividerHorizontal } from "components/divider";
import HeadingS from "components/heading";
import Item from "components/item";

export default function Home() {
  return (
    <>
      <Container
        p={ 4 }
        maxW='container.xl'
      >
        <Stack spacing={ 4 }>
          <HeadingS as='h1' size='md'>
            My project
          </HeadingS>
          <DividerHorizontal />
          <Grid templateColumns='repeat(5, 1fr)' gap={ 4 }>
            <Item />
          </Grid>
        </Stack>
      </Container>
    </>
  );
}