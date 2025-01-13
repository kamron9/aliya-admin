import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface SectionTitleProps {
	title: string | React.ReactNode
	children: React.ReactNode
}
const SectionTitle: FC<SectionTitleProps> = ({ title, children }) => {
	return (
		<Box
			width={'100%'}
			display={'flex'}
			height={60}
			alignItems={'center'}
			justifyContent={'space-between'}
		>
			<Typography component={'h3'} fontWeight={600}>
				{title}
			</Typography>
			<Box>{children}</Box>
		</Box>
	)
}

export default SectionTitle
