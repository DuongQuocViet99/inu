import { Badge } from "@chakra-ui/react";

export const BadgeC = ({ children, ...rest }) =>
  <Badge
    rounded='sm'
    color='white'
    fontWeight='700'
    fontFamily='Quicksand'
    { ...rest }
  >
    { children }
  </Badge>