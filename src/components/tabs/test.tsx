import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const OrderTabs: React.FC = () => {
	const location = useLocation()
	const navigate = useNavigate() 
	const queryParams = new URLSearchParams(location.search)
	const initialTab = queryParams.get('order') || 'new' //
	const [activeTab, setActiveTab] = useState(initialTab)

	const handleChangeTab = (tab: string) => {
		setActiveTab(tab)
		navigate(`?tab=${tab}`)
	}

	useEffect(() => {
		if (initialTab !== activeTab) {
			setActiveTab(initialTab)
		}
	}, [initialTab])

	return (
		<div className='max-w-[591px] w-full bg-secondary h-full rounded-full p-1'>
			<nav className='flex h-full gap-1'>
				<button
					className={`flex-1 transition-all duration-300 rounded-[24px] ${activeTab === 'new' ? 'bg-white' : ''}`}
					onClick={() => handleChangeTab('new')}
				>
					Yangi
				</button>
				<button
					className={`flex-1 transition-all duration-300 rounded-[24px] ${activeTab === 'accepted' ? 'bg-white' : ''}`}
					onClick={() => handleChangeTab('accepted')}
				>
					Qabul qilingan
				</button>
				<button
					className={`flex-1 transition-all duration-300 rounded-[24px] ${activeTab === 'cancelled' ? 'bg-white' : ''}`}
					onClick={() => handleChangeTab('cancelled')}
				>
					Bekor qilingan
				</button>
			</nav>
		</div>
	)
}

export default OrderTabs
