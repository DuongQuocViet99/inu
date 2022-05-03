import { Divider } from "@chakra-ui/react";

export const DividerHorizontal = props => (
  <Divider
    borderColor='adobe.3'
    { ...props }
  />
);

export const DividerVerticalControls = props => (
  <Divider
    h='12px'
    orientation='vertical'
    borderColor='whiteAlpha.400'
    { ...props }
  />
);

export const DividerVerticalTabs = props => (
  <Divider
    h='12px'
    borderColor='adobe.3'
    orientation='vertical'
    { ...props }
  />
);