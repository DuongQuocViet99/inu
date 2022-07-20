import { Link, Outlet, useLocation } from "react-router-dom";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { FiBox, FiSettings } from "react-icons/fi";
import { IconButtonSidebar, DrawerC, Header, Map } from "components/common";

const sidebarItem = [
  { icon: FiBox, url: '/' },
  { icon: FiSettings, url: '/settings' }
];

export default function Layout() {
  const { pathname } = useLocation();

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
            <DrawerC />
            <VStack spacing={ 6 }>
              <Map 
                data={ sidebarItem }
                render={( i, k ) => 
                  <IconButtonSidebar
                    key={ k }
                    as={ Link }
                    to={ i.url }
                    icon={ <i.icon /> }
                    bg={ i.url === pathname ? 'adobe.9' : 'none' }
                    color={ i.url === pathname ? 'adobe.10' : 'adobe.8' }
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