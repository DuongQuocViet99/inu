import { Divider } from "@chakra-ui/react";

export const DividerHorizontal = props => (
  <Divider
    borderColor='adobe.3'
    { ...props }
  />
);

export const DividerVertical = props => (
  <Divider
    h='12px'
    orientation='vertical'
    borderColor='whiteAlpha.400'
    { ...props }
  />
);