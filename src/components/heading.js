import { Heading } from "@chakra-ui/react";

export default function HeadingS( props ) {
  const { children, ...rest } = props;

  return (
    <>
      <Heading
        color='adobe.7'
        fontWeight='500'
        fontFamily='Quicksand'
        { ...rest }
      >
        { children }
      </Heading>
    </>
  );
}