import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material'
import React from 'react'

const theme = createTheme({
	palette: {
		primary: {
			main: '#fcb600',
		},
		success: {
			main: '#20d472',
		},
		secondary: {
			main: '#edeff3',
		},
	},
})

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}

export default ThemeProvider
