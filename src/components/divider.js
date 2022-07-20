import { Divider } from "@chakra-ui/react";

export const DividerHorizontal = props =>
  <Divider
    border='2px'
    rounded='full'
    borderColor='adobe.11'
    { ...props }
  />

export const DividerVerticalControls = props =>
  <Divider
    h='12px'
    orientation='vertical'
    borderColor='whiteAlpha.500'
    { ...props }
  />

export const DividerVerticalTabs = props =>
  <Divider
    h='12px'
    orientation='vertical'
    borderColor='adobe.10'
    { ...props }
  />