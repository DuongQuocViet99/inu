import { Checkbox } from "@chakra-ui/react";

export default function CheckboxLg( props ) {
  return (
    <>
      <Checkbox
        size='lg'
        { ...props }
      />
    </>
  );
}