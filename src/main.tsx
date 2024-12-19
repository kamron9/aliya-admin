import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Root from './routes'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		{/* <ThemeProvider> */}
		<Root />
		{/* </ThemeProvider> */}
	</BrowserRouter>
)
