import { HStack, SlideFade, useDisclosure } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { CgCheck } from "react-icons/cg";
import { useState } from 'react';

import { IconButtonColor, IconButtonShowMore } from "components/iconbutton";
import Map from "render/map";

const colorList = [
  '#ffcdb2', 
  '#ffb4a2', 
  '#e5989b', 
  '#b5838d', 
  '#6d6875', 
  '#89b0ae'
];

export default function ColorList() {
  const [ color, setColor ] = useState('#6d6875');
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <>
      <HStack>
        {
          isOpen ?
            <SlideFade in={ isOpen } offsetY='20px'>
              <HStack>
                <Map data={ colorList } render={( i, k ) => 
                  <IconButtonColor 
                    bg={ i }
                    key={ k }
                    onClick={() => setColor( i )}
                    icon={ color === i && <CgCheck /> }
                    _hover={{ border: '2px', borderColor: 'white' }}
                  />
                }/>
              </HStack>
            </SlideFade>
          :
            <IconButtonColor bg={ color } />
        }
        <IconButtonShowMore 
          onClick={ onToggle }
          fontSize='2xl'
          icon={ <FiChevronRight /> }
          transform={ isOpen && 'rotate(90deg)' } 
        />
      </HStack>
    </>
  );
}