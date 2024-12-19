import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Avatar } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutModal from '../modal/LogoutModal'

const LogoutMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [openLogoutModal, setOpenLogoutModal] = useState(false)
	const navigate = useNavigate()
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleOpenLogoutModal = () => {
		setOpenLogoutModal(true)
	}
	const handleCloseLogoutModal = () => {
		setOpenLogoutModal(false)
	}

	const handleNavigate = (path: string) => {
		setAnchorEl(null)

		if (path === '/login') {
			handleOpenLogoutModal()
			return
		}
		navigate(path)
	}

	return (
		<div>
			<Button onClick={handleClick}>
				<Avatar sx={{ bgcolor: 'secondary.main', height: 30, width: 30 }}>
					<PersonOutlineIcon />
				</Avatar>
			</Button>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={() => handleNavigate('/settings')}>
					Sozlamalar
				</MenuItem>
				<MenuItem onClick={() => handleNavigate('/login')}>Chiqish</MenuItem>
			</Menu>
			<LogoutModal
				open={openLogoutModal}
				handleClose={handleCloseLogoutModal}
			/>
		</div>
	)
}
export default LogoutMenu
