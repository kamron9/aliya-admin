import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { sidebarItems } from '../../constants/sidebar'

const SidebarLayout: React.FC = () => {
	return (
		<Box height={'100%'}>
			<Box
				sx={{
					width: 230,
					display: 'flex',
					flexDirection: 'column',
					padding: 2,
					height: '100%',
				}}
			>
				<Typography variant='h6' align='center' gutterBottom>
					Aliya.uz
				</Typography>
				<List>
					{sidebarItems.map(({ text, Icon, path }) => (
						<ListItem key={text} disablePadding>
							<NavLink to={path} className={'nav-link'}>
								<ListItemIcon
									sx={{ color: 'currentcolor', minWidth: 'fit-content' }}
								>
									<Icon />
								</ListItemIcon>
								<ListItemText primary={text} />
							</NavLink>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	)
}

export default SidebarLayout
