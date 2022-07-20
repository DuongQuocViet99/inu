import { Tooltip } from "@chakra-ui/react";

export const TooltipC = ({ children, ...rest }) =>
  <Tooltip
    bg='adobe.7'
    fontWeight='700'
    fontFamily='Quicksand'
    placement='bottom-start'
    { ...rest }
  >
    { children }
  </Tooltip>