import CategoryIcon from '@mui/icons-material/Category'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import ListAltIcon from '@mui/icons-material/ListAlt'
import SettingsIcon from '@mui/icons-material/Settings'
export const sidebarItems = [
	{ text: 'Buyurtmalar', Icon: ListAltIcon, path: '/orders' },
	{ text: 'Maxsulotlar', Icon: Inventory2Icon, path: '/products' },
	{ text: 'Kategorya', Icon: CategoryIcon, path: '/categories' },
	{ text: 'Sozlamalar', Icon: SettingsIcon, path: '/settings' },
]
