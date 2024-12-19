import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard.tsx'
import LoginPage from '../pages/LoginPage.tsx'

const Root = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={'/'} element={<Dashboard />} />
				<Route path={'/products'} element={<h1>products page</h1>} />
				<Route path={'/categories'} element={<h1>categoris page</h1>} />
				<Route path={'/settings'} element={<h1>settings page</h1>} />
			</Route>
			<Route path={'/login'} element={<LoginPage />} />
		</Routes>
	)
}

export default Root
