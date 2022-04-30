import { Text } from "@chakra-ui/react";

export default function TextS( props ) {
  const { children, ...rest } = props;

  return (
    <>
      <Text
        color='adobe.5'
        fontWeight='600'      
        fontFamily='Quicksand'
        { ...rest }
      >
        { children }
      </Text>
    </>
  );
}