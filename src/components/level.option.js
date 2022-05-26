import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, Checkbox, HStack, CheckboxGroup } from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi';
import React from 'react';

import { IconButtonShowMore } from 'components/iconbutton';
import TextS from 'components/text';
import Map from 'render/map';

export default function LevelOption() {
  const [ value, setValue ] = React.useState('C')

  return (
    <>
      <Accordion 
        allowToggle 
        border='white' 
        boxShadow='base'
      >
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionButton as={ Box }>
                <TextS flex='1'>
                  { value }
                </TextS>
                <IconButtonShowMore
                  icon={ <FiChevronRight /> }
                  transform={ isExpanded && 'rotate(90deg)' }
                />
              </AccordionButton>
              <AccordionPanel pb={ 4 }>
                <CheckboxGroup onChange={ setValue } value={ value }>
                  <HStack>
                    <Map data={[ 'S', 'A', 'B', 'C' ]} render={( i, k ) =>
                      <HStack key={ k }>
                        <Checkbox
                          value={ i }
                          size='lg'
                          rounded='full'
                          onChange={ e => {
                            e.target.checked && setValue( i )
                          }}
                        />
                        <TextS>{ i }</TextS>
                      </HStack>
                    }/>
                  </HStack>
                </CheckboxGroup>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
}