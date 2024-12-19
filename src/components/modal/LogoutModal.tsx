import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface LogoutModalProps {
	open: boolean
	handleClose: () => void
}

const LogoutModal: FC<LogoutModalProps> = ({ open, handleClose }) => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate('/login')
		handleClose()
	}
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Tizimdan Chiqmoqchimisiz</DialogTitle>
			<DialogContent></DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Yo'q</Button>
				<Button onClick={handleNavigate} autoFocus>
					Ha
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default LogoutModal
