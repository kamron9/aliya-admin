import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import { Box } from '@mui/material'
import { useState } from 'react'
import OrderTabs from '../tabs/OrderTab'
import LogoutMenu from './LogoutMenu'

const Header = () => {
	const [isFullScreen, setIsFullScreen] = useState(false)
	const toggleFullScreen = () => {
		if (isFullScreen) {
			document.exitFullscreen()
		} else {
			document.documentElement.requestFullscreen()
		}
		setIsFullScreen(!isFullScreen)
	}
	return (
		<header className='p-3 bg-white flex justify-between h-[var(--header-height)]'>
			<h1 className='text-2xl font-semibold'>Buyurtmalar</h1>
			{/* <div>
				<TextField
					size='small'
					placeholder='Buyurtmani qidirish'
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon />
								</InputAdornment>
							),
						},
					}}
				/>
			</div> */}
			<OrderTabs />

			<Box display={'flex'} alignItems={'center'} gap={2}>
				<button onClick={toggleFullScreen}>
					{isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
				</button>
				<LogoutMenu />
			</Box>
		</header>
	)
}

export default Header
