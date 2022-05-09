import { Badge } from "@chakra-ui/react";

export default function BadgeS({ children, ...rest }) {
  return (
    <>
      <Badge
        rounded='sm'
        color='white'
        fontWeight='700'
        fontFamily='Quicksand'
        { ...rest }
      >
        { children }
      </Badge>
    </>
  );
}