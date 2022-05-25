import { Checkbox, HStack } from "@chakra-ui/react";
import { useState } from "react";

import TextS from "components/text";

export default function TaskWork() {
  const [ complete, setComplete ] = useState( false );

  return (
    <>
      <HStack>
        <Checkbox
          onChange={ e => {
            e.target.checked ? setComplete( true ) : setComplete( false )
          }}
          size='lg'
          rounded='full'
        />
        <TextS as={ complete ? 'del' : 'i' }>task name</TextS>
      </HStack>
    </>
  );
}