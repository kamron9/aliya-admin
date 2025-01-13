import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CloseIcon from '@mui/icons-material/Close'
import FilterListIcon from '@mui/icons-material/FilterList'
import {
	Box,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material'
import { useState } from 'react'

type DataItem = {
	name: string
	category: string
	price: number
}

type FilterComponentProps = {
	data: DataItem[]
	onFilter: (filteredData: DataItem[]) => void
}

const Filter: React.FC<FilterComponentProps> = () => {
	const [openFilter, setOpenFilter] = useState(false)
	const [category, setCategory] = useState('')

	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string)
	}
	return (
		<Box
			display={'flex'}
			alignItems={'center'}
			gap={1}
			flexDirection={'row-reverse'}
		>
			<IconButton
				color={`${openFilter ? 'error' : 'default'}`}
				onClick={() => setOpenFilter(!openFilter)}
			>
				{openFilter ? <CloseIcon /> : <FilterListIcon />}
			</IconButton>

			{openFilter && (
				<Box display={'flex'} alignItems={'center'} gap={3}>
					{/* category selection */}
					<FormControl
						size='small'
						sx={{
							minWidth: 120,
							maxWidth: 'fit-content',
						}}
					>
						<InputLabel>Kategorya</InputLabel>
						<Select label='Kategorya' onChange={handleChange} value={category}>
							<MenuItem value={'Ten'}>Ten</MenuItem>
							<MenuItem value={'Twenty'}>Twenty</MenuItem>
							<MenuItem value={'Thirty'}>Thirty</MenuItem>
						</Select>
					</FormControl>
					{/* min and max price  */}
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
						<TextField
							label='min. narx'
							size='small'
							sx={{ maxWidth: 120 }}
							slotProps={{
								input: {
									startAdornment: <AttachMoneyIcon />,
								},
							}}
						/>
						<TextField
							size='small'
							label='max. narx'
							sx={{ maxWidth: 120 }}
							slotProps={{
								input: {
									startAdornment: <AttachMoneyIcon />,
								},
							}}
						/>
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default Filter
