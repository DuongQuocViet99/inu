import { HStack, Spacer, Stack } from "@chakra-ui/react"; 
import { useState } from "react";
import {
  AvatarActivate, CheckboxC, TextC, RemoveMemberDialog, AddMemberDialog
} from "components/common";

export default function Team() {
  const [checkedItems, setCheckedItems] = useState([false, false])
  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <>
        <Stack spacing={ 8 } p={ 6 }>
          <HStack spacing={ 4 }>
            <CheckboxC
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
            />
            <TextC>Member selected (2)</TextC>
            <RemoveMemberDialog checkedItems={ checkedItems } />
            <Spacer />
            <AddMemberDialog />
          </HStack>
          
          <Stack>
            <HStack w='full' spacing={ 4 }>
              <CheckboxC
                isChecked={checkedItems[0]}
                onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
              />
              <HStack 
                p={ 2 } 
                w='full'
                spacing={ 6 }
                boxShadow='md' 
              >
                <AvatarActivate name='na ru to' />
                <TextC>na ru to</TextC>
              </HStack>
            </HStack>

            <HStack w='full' spacing={ 4 }>
              <CheckboxC
                isChecked={checkedItems[1]}
                onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
              />
              <HStack 
                p={ 2 } 
                w='full'
                spacing={ 6 }
                boxShadow='md' 
              >
                <AvatarActivate name='sa su ke' />
                <TextC>sa su ke</TextC>
              </HStack>
            </HStack>
          </Stack>

        </Stack>
    </>
  );
}