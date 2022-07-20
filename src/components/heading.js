import { Heading } from "@chakra-ui/react";

export const HeadingC = ({ children, ...rest }) =>
  <Heading
    color='adobe.6'
    fontWeight='600'
    fontFamily='Quicksand'
    { ...rest }
  >
    { children }
  </Heading>