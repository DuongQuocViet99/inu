import { FiBox, FiMessageCircle, FiUsers } from "react-icons/fi";
import { Box, HStack, Spacer, Square } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { CgToday } from "react-icons/cg";
import { DividerVerticalTabs, ButtonNavbar, HeadingC, New, Map } from "components/common";

const tabs = [
  { title: 'To do', icon: CgToday, fontSize: '16px', url: '/inu/todo' },
  { title: 'Mess', icon: FiMessageCircle, fontSize: '16px', url: '/inu/mess' },
  { title: 'Team', icon: FiUsers, fontSize: '16px', url: '/inu/team' }
];

export const Header = () => {
  const { pathname } = useLocation();
  const condition = ['/', '/settings'].every( e => pathname !== e ); 
  
  return (
    <>
      <Box 
        top={ 0 }
        bg='white'
        zIndex={ 1111 }
        position='sticky'
        roundedBottomStart='xl'
        boxShadow={ condition && 'base' }
      >
        { condition ?
          <>
            <HStack p={ 5 }>
              <Square 
                p={ 2 }
                rounded='md'
                bg='adobe.9' 
                fontSize='xl'
                color='adobe.11'
              >
                <FiBox />
              </Square>
              <HeadingC size='md'>
                Inu
              </HeadingC>
              
              <Spacer />
              <New />
            </HStack>
      
            <HStack
              p={ 2 }
              pl={ 6 }
            >
              <Map data={ tabs } render={( t, k ) =>
                <HStack key={ k }>
                  <ButtonNavbar
                    url={ t.url }
                    pathname={ pathname }
                    leftIcon={ <t.icon fontSize={ t.fontSize } /> }
                  >
                    { t.title }
                  </ButtonNavbar>
                  {
                    k === 2 ? <></> : <DividerVerticalTabs /> 
                  }
                </HStack>
              }/>
            </HStack>
          </>
          :
          <HStack p={ 6 }>
            <Spacer />
            <New />
          </HStack>
        }
      </Box>
    </>
  );
}