import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import SearchIcon from '@mui/icons-material/Search'
import { Box, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
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
		<Box
			component={'header'}
			p={2}
			bgcolor={'white'}
			display='flex'
			justifyContent='space-between'
		>
			<div>
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
			</div>

			<Box display={'flex'} alignItems={'center'} gap={2}>
				<button onClick={toggleFullScreen}>
					{isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
				</button>
				<LogoutMenu />
			</Box>
		</Box>
	)
}

export default Header
