import AddIcon from '@mui/icons-material/Add'
import { Box, Button } from '@mui/material'
import { Outlet } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

const Dashboard = () => {
	return (
		<div>
			<SectionTitle title='Buyurtmalar'>
				<Box display={'flex'} alignItems={'center'} gap={1}>
					<Button startIcon={<AddIcon />} variant='contained' color='primary'>
						Buyurtma qo'shish
					</Button>
				</Box>
			</SectionTitle>
			<Outlet />
		</div>
	)
}

export default Dashboard
