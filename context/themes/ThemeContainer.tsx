import React from 'react';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import theme from '../../styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <EmotionThemeProvider theme={theme}>
        <ColorModeScript initialColorMode="dark" />

        {children}
      </EmotionThemeProvider>
    </ChakraProvider>
  );
};

export default ThemeContainer;
