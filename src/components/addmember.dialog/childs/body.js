import { 
  Box, Stack, TagLabel, ModalBody, SimpleGrid, TagCloseButton, HStack 
} from "@chakra-ui/react";
import { useState } from "react";
import { 
  AvatarActivate, InputOutline, FilterToMap, TooltipC, MemberTagName, TextC, Map 
} from "components/common";

const listMemberApp = [
  'Na ru to', 'Sa su ke', 'Sa ku ra' 
];

export const Body = () => {
  const [ name, setName ] = useState( null );
  const [ select, setSelect ] = useState([]);

  return (
    <ModalBody>
      <Stack>
        <SimpleGrid 
          columns={ 5 } 
          spacing={ 2 }
        >
          <Map data={ select } render={( i, k ) => 
            <TooltipC 
              key={ k } 
              label={ i }
            > 
              <MemberTagName>
                <TagLabel>{ i }</TagLabel>
                <TagCloseButton 
                  _focus 
                  onClick={() => setSelect(
                    [ ...select.slice( 0, k ), 
                      ...select.slice( k + 1 ) ]
                  )}
                />
              </MemberTagName>
            </TooltipC>
          }/>
        </SimpleGrid>
        <InputOutline
          placeholder='member name( click "S" to test )'
          onChange={ e => setName( e.target.value )}
        />
      </Stack>

      <Box boxShadow='base'>
        <FilterToMap 
          data={ listMemberApp } 
          condition={ i => i.includes( name ) && name !== '' } 
          render={( i, k ) => 
            <HStack
              key={ k } 
              p={ 2 }
              cursor='default'
              _hover={{ boxShadow: 'md' }}
              onClick={() => select.every( e => !e.includes( i )) && setSelect([ ...select, i ])}
            >
              <AvatarActivate name={ i } />
              <TextC>{ i }</TextC>
            </HStack>
          }
        />
        { 
          listMemberApp.every( i => !i.includes( name ) && name !== null ) && 
          <TextC p={ 2 }>not found</TextC> 
        }
      </Box>
    </ModalBody>
  );
}
  