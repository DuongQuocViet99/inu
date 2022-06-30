import { Tooltip } from "@chakra-ui/react";

export default function TooltipC({ children, ...rest }) {
  return (
    <>
      <Tooltip
        bg='adobe.7'
        fontWeight='700'
        fontFamily='Quicksand'
        placement='bottom-start'
        { ...rest }
      >
        { children }
      </Tooltip>
    </>
  );
}