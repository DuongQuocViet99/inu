import { Text } from "@chakra-ui/react";

export const TextC = ({ children, ...rest }) =>
  <Text
    color='adobe.11'
    fontWeight='600'      
    fontFamily='Quicksand'
    { ...rest }
  >
    { children }
  </Text>