import { Checkbox, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { TextC } from "components/common";

export const WorkTab = () => {
  const [ complete, setComplete ] = useState( false );

  return (
    <>
      <HStack>
        <Checkbox
          size='lg'
          rounded='full'
          onChange={ e => {
            e.target.checked ? setComplete( true ) : setComplete( false )
          }}
        />
        <TextC as={ complete ? 'del' : 'i' }>task name</TextC>
      </HStack>
    </>
  );
}