// PageNotFound.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound: React.FC = () => {
	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<div className='text-center'>
				<h1 className='text-9xl font-extrabold text-gray-800'>404</h1>
				<p className='text-2xl font-medium text-gray-600 mt-4'>
					Oops! Sahifa topilmadi!
				</p>

				<Link
					to='/'
					className='mt-6 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300'
				>
					Orqaga qaytish
				</Link>
			</div>
		</div>
	)
}

export default PageNotFound
