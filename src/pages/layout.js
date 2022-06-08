import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { FiBox, FiSettings } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

import { IconButtonSidebar } from "components/iconbutton";
import DrawerS from "components/drawer";
import Header from "components/header";
import Map from "render/map";

const sidebarItem = [
  { icon: FiBox, url: '/' },
  { icon: FiSettings, url: '/settings' }
];

export default function Layout() {
  return (
    <>
      <Grid templateColumns='repeat(20, 1fr)'>
        <GridItem colSpan={ 1 }>
          <VStack
            p={ 5 }
            top={ 0 }
            spacing={ 12 }
            position='sticky'
          >
            <DrawerS />
            <VStack spacing={ 5 }>
              <Map 
                data={ sidebarItem }
                render={( i, k ) => 
                  <IconButtonSidebar
                    key={ k }
                    as={ Link }
                    to={ i.url }
                    icon={ <i.icon /> }
                    bg={ i.url !== '/settings' ? '#F2EDE4' : 'none' }
                    color={ i.url !== '/settings' ? 'adobe.8' : '#D9D9D9' }
                  />
                }
              />
            </VStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={ 19 }>
          <Header />
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}