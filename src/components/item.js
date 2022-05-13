import { Flex, GridItem, LinkBox, LinkOverlay, Spacer } from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";
import { CgTrash } from "react-icons/cg";
import { Link } from "react-router-dom";

import { IconButtonPopoverItem } from "components/iconbutton";
import PopoverControls from "components/popover.controls";
import { DividerVerticalTabs } from "components/divider";
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
          <PopoverControls>
            <IconButtonPopoverItem
              fontSize='17px'
              icon={ <FiEdit2 /> }
            />
            <DividerVerticalTabs />
            <IconButtonPopoverItem
              fontSize='19px'
              icon={ <CgTrash /> }
            />
            <DividerVerticalTabs />
          </PopoverControls>
        </GridItem>
      </LinkBox>
    </>
  );
}