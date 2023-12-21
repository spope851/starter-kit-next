'use client'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material'
import React, { ReactNode, createContext, useEffect, useMemo, useState } from 'react'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    solid: true
  }
}

export const ThemeModeContext = createContext({ toggleThemeMode: () => {} })

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<string | null>()
  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () =>
        setDarkMode((prevMode) => (prevMode === 'enable' ? 'disable' : 'enable')),
    }),
    []
  )

  useEffect(() => {
    if (darkMode)
      localStorage.setItem('darkMode', darkMode === 'enable' ? 'enable' : 'disable')
    else setDarkMode(localStorage.getItem('darkMode') || 'disable')
  }, [darkMode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode === 'enable' ? 'dark' : 'light',
        },
        components: {
          MuiButton: {
            defaultProps: {
              variant: 'solid',
              disableRipple: true,
            },
            variants: [
              {
                props: {
                  variant: 'solid',
                },
                style: {
                  color: '#fff',
                  margin: 'auto',
                  textAlign: 'center',
                  textDecoration: 'none',
                  textTransform: 'none',
                  letterSpacing: 0,
                  background: '#0e817c',
                  lineHeight: '2.65',
                  width: '9em',
                  borderRadius: '0.16666667em',
                  fontSize: '0.9em',
                  fontFamily: 'Roboto, sans-serif',
                  WebkitTransition: '.2s ease',
                  transition: '.2s ease',
                  display: 'inline-block',
                  fontWeight: 'bold',
                  position: 'relative',
                  zIndex: '1',
                  padding: 0,
                  ':before': {
                    content: "''",
                    position: 'absolute',
                    display: 'block',
                    height: '100%',
                    width: '0%',
                    background: '#10625e',
                    opacity: '1',
                    top: '0',
                    left: '0',
                    zIndex: '-1',
                    borderRadius: '0.16666667em',
                    transition: '.3s',
                  },
                  ':hover': {
                    ':before': {
                      width: '100%',
                    },
                    cursor: 'pointer',
                    WebkitTransition: '.2s ease',
                    transition: '.2s ease',
                  },
                },
              },
            ],
          },
        },
      }),
    [darkMode]
  )

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeModeContext.Provider>
  )
}
