import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard.tsx'
import LoginPage from '../pages/LoginPage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'

const Root = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={'/'} element={<Navigate to={'/orders/new'} />} />
				<Route path={'/orders'} element={<Dashboard />}>
					<Route path={'/orders'} element={<Navigate to={'/orders/new'} />} />
					<Route path={'/orders/new'} element={<h1>new page</h1>} />
					<Route path={'/orders/accepted'} element={<h1>accepted page</h1>} />
					<Route path={'/orders/canceled'} element={<h1>canceled page</h1>} />
				</Route>
				<Route path={'/products'} element={<h1>products page</h1>} />
				<Route path={'/categories'} element={<h1>categoris page</h1>} />
				<Route path={'/settings'} element={<h1>settings page</h1>} />
			</Route>
			<Route path={'/login'} element={<LoginPage />} />
			<Route path={'*'} element={<NotFoundPage />} />
		</Routes>
	)
}

export default Root
