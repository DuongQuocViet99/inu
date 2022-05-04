import { Flex, GridItem, LinkBox, LinkOverlay, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import PopoverControls from "components/popover.controls";
import TextS from "components/text";

export default function Item() {
  return (
    <>
      <LinkBox>
        <GridItem
          p={ 1 }
          pr={ 0 }
          pl={ 3 }
          as={ Flex }
          boxShadow='md'
          alignItems='center'
          _hover={{ boxShadow: 'base' }}
        >
          <LinkOverlay as={ Link } to='/inu/todo'>
            <TextS>Inu</TextS>
          </LinkOverlay>
          <Spacer />
          <PopoverControls />
        </GridItem>
      </LinkBox>
    </>
  );
}