import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { theme } from './theme';

interface AppThemeProps {
    children: React.ReactNode;
}

 const AppTheme: React.FC<AppThemeProps> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

export default AppTheme;
