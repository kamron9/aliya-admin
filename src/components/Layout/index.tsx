import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
	return (
		<Box sx={{ display: 'flex' }} height={'100vh'} overflow={'hidden'}>
			<Sidebar />
			<Box flex={1} bgcolor={'var(--background-default)'}>
				<Header />
				<Box
					component={'main'}
					borderTop={1}
					borderLeft={1}
					borderColor={'#e0e0e0'}
					p={2}
					height={'100%'}
				>
					<Outlet />
				</Box>
			</Box>
		</Box>
	)
}

export default Layout
