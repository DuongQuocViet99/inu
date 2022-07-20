import { 
  Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, Checkbox, HStack, CheckboxGroup 
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { IconButtonShowMore, TextC, Map } from "components/common";

export const LevelOption = () => {
  const [ value, setValue ] = useState('C');

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
                <TextC flex='1'>
                  { value }
                </TextC>
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
                        <TextC>{ i }</TextC>
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