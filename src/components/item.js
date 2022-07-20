import { Flex, GridItem, LinkBox, LinkOverlay, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom"; 
import { TextC, ItemControls } from "components/common";

export const Item = () =>
  <LinkBox>
    <GridItem
      p={ 2 }
      as={ Flex }
      boxShadow='md'
      alignItems='center'
      _hover={{ boxShadow: 'base' }}
    >
      <LinkOverlay as={ Link } to='/inu/todo'>
        <TextC>Inu</TextC>
      </LinkOverlay>
      <Spacer />
      <ItemControls />
    </GridItem>
  </LinkBox>