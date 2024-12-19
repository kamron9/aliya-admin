import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material'
import React from 'react'

const theme = createTheme({
	palette: {
		primary: {
			main: '#daff7d',
		},
		secondary: {
			main: '#ff9800',
		},
	},
})

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}

export default ThemeProvider
