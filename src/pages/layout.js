import { HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import DrawerS from "components/drawer";

export default function Layout() {
  return (
    <>
      <HStack
        p={ 2 }
        top={ 0 }
        position='sticky'
        borderBottom='1px'
        borderColor='adobe.2'
      >
        <DrawerS />
      </HStack>
      <Outlet />
    </>
  );
}