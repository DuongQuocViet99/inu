import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    adobe: {
      0: '#F2F2F2',
      1: '#E6E6E6',
      2: '#D9D9D9',
      3: '#BFBFBF',
      4: '#A6A6A6',
      5: '#737373',
      6: '#999999',
      7: '#595959'
    },
    coolors: {
      1: '#FFCDB2',
      2: '#FFB4A2',
      3: '#E5989B',
      4: '#B5838D',
      5: '#6D6875'
    }
  }
});

export default theme;