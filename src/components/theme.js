import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    adobe: {
      0: '#F2F2F2',
      1: '#E6E6E6',
      2: '#D9D9D9',
      3: '#BFBFBF',
      4: '#A6A6A6',
      5: '#999999',
      6: '#737373',
      7: '#595959',

      8: '#D9D9D9',
      9: '#F2EDE4',
      10: '#BFB9B8',
      11: '#A6A1A1'
    },
    coolors: {
      1: '#FFCDB2',
      2: '#FFB4A2',
      3: '#E5989B',
      4: '#B5838D',
      5: '#6D6875'
    }
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: '#BFB9B8',
          _checked: {
            bg: '#BFB9B8',
            borderColor: '#BFB9B8',
            _hover: {
              bg: '#BFB9B8',
              borderColor: '#BFB9B8',
            }
          },
          _indeterminate: {
            bg: '#BFB9B8',
            borderColor: '#BFB9B8'
          },
          _focus: {
            boxShadow: 'none'
          }
        }
      }
    }
  }
});

export default theme;