import { FiMessageCircle, FiUsers } from "react-icons/fi";
import { CgChevronLeft, CgToday } from "react-icons/cg";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { DividerVerticalTabs } from "components/divider";
import { IconButtonLogo } from "components/iconbutton";
import { ButtonSpace } from "components/button";
import HeadingS from "components/heading";
import DrawerS from "components/drawer";
import New from "components/modal.new";
import Map from "render/map";

const tabs = [
  { title: 'Back', icon: CgChevronLeft, fontSize: '18px', url: '/' },
  { title: 'To do', icon: CgToday, fontSize: '16px', url: '/inu/todo' },
  { title: 'Mess', icon: FiMessageCircle, fontSize: '16px', url: '/inu/mess' },
  { title: 'Team', icon: FiUsers, fontSize: '16px', url: '/inu/team' }
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <Box 
        top={ 0 }
        bg='white'
        position='sticky'
      >
        <HStack
          p={ 2 }
          borderBottom='1px'
          borderColor='adobe.2'
        >
          <DrawerS />
          { pathname !== '/' &&
            <>
              <IconButtonLogo />
              <HeadingS size='md'>
                Inu
              </HeadingS>
            </> 
          }
          <Spacer />
          <New />
        </HStack>
        { pathname !== '/' &&
          <HStack 
            p={ 1 }
            borderBottom='1px'
            borderColor='adobe.2'
          >
            <Map data={ tabs } render={( t, k ) =>
              <HStack key={ k }>
                <ButtonSpace
                  url={ t.url }
                  pathname={ pathname }
                  leftIcon={ <t.icon fontSize={ t.fontSize } /> }
                >
                  { t.title }
                </ButtonSpace>
                {
                  k === 3 ? <></> : <DividerVerticalTabs /> 
                }
              </HStack>
            }/>
          </HStack>
        }
      </Box>
    </>
  );
}