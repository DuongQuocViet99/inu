import { CgLoadbar } from "react-icons/cg";
import { Tab } from "@chakra-ui/react";

export const IconTab = () =>
  <Tab
    p={ 0 }
    color='adobe.3'
    cursor='default'
    _focus _selected={{ color: 'adobe.5' }}
  >
    <CgLoadbar fontSize='24px' />
  </Tab>