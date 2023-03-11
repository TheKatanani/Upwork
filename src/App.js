import  React, { useEffect, useState } from 'react';
import  { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styled-components/global';
import { darkTheme, lightTheme } from './assets/styled-components/theme';
import MyRoutes from './Routes';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  // const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setTheme(localStorage.getItem('theme')==='light'? darkTheme: lightTheme );
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <MyRoutes/>
    </ThemeProvider>
  );
}

export default App;
