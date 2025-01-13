import AddIcon from '@mui/icons-material/Add'
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import Filter from '../components/FilterComponent'
import SectionTitle from '../components/SectionTitle'

const Dashboard = () => {
	const [filteredData, setFilteredData] = useState([])
	const handleFilter = (filtered: any) => {
		setFilteredData(filtered)
	}
	return (
		<div>
			<SectionTitle title='Maxsulotlar'>
				<Box display={'flex'} alignItems={'center'} gap={1}>
					<Filter data={filteredData} onFilter={handleFilter} />
					<Button startIcon={<AddIcon />} variant='contained' color='primary'>
						Buyurtma qo'shish
					</Button>
				</Box>
			</SectionTitle>
		</div>
	)
}

export default Dashboard
