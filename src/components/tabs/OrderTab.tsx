import { NavLink } from 'react-router-dom'

const OrderTabs: React.FC = () => {
	const activeLink = (isActive: boolean) => {
		return isActive ? 'order-link-active order-link' : 'order-link'
	}

	return (
		<div className='max-w-[591px] w-full bg-secondary h-full rounded-full p-1'>
			<nav className='flex h-full gap-1'>
				<NavLink
					className={({ isActive }) => activeLink(isActive)}
					to={'/orders/new'}
				>
					Yangi
				</NavLink>
				<NavLink
					className={({ isActive }) => activeLink(isActive)}
					to={'/orders/accepted'}
				>
					Qabul qilingan
				</NavLink>
				<NavLink
					className={({ isActive }) => activeLink(isActive)}
					to={'/orders/canceled'}
				>
					Bekor qilingan
				</NavLink>
			</nav>
		</div>
	)
}

export default OrderTabs
