import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, CSSReset, ColorModeProvider, Flex, IconButton, ThemeProvider, theme, useColorMode } from "@chakra-ui/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Flex>
          <Box>
            <ThemeSelector />
            <h1 style={{ fontSize: '36px' }}>Hello</h1>
          </Box>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box pos={'fixed'} right={'1%'} top={'2%'}>
      <IconButton onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon color={'green.400'} /> : <SunIcon color={'green.400'} />}
      </IconButton>
    </Box>
  )
}

export default App;