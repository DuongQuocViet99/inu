import { HStack, SlideFade, useDisclosure } from "@chakra-ui/react" ;
import { CgCheck } from "react-icons/cg";
import { useState } from "react";
import { IconButtonColor, Map, IconButtonShowMoreChevron } from "components/common";

const colorList = [
  '#ffcdb2', '#ffb4a2', '#e5989b', '#b5838d', '#6d6875', '#89b0ae'
];

export const ColorList = () => {
  const [ color, setColor ] = useState('#6d6875');
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <>
      <HStack 
        p={ 1 }
        border='2px'
        rounded='full'
        borderColor='adobe.9'
      >
        {/* Open colors list when isOpen === true */}
        { isOpen ?
          <SlideFade in={ isOpen } offsetY='20px'>
            <HStack>
              <Map data={ colorList } render={( i, k ) => 
                <IconButtonColor 
                  key={ k }
                  bg={ i }
                  onClick={() => setColor( i )}
                  icon={ color === i && <CgCheck /> }
                />
              }/>
            </HStack>
          </SlideFade>
          :
          <IconButtonColor bg={ color } />
        }
        {/* Trigger button */}
        <IconButtonShowMoreChevron
          onClick={ onToggle }
          transform={ isOpen && 'rotate(90deg)' } 
        />
      </HStack>
    </>
  );
}