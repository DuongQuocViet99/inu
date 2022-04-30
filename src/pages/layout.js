import { HStack, Spacer } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import DrawerS from "components/drawer";
import New from "components/modal.new";

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
        <Spacer />
        <New />
      </HStack>
      <Outlet />
    </>
  );
}