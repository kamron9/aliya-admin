import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './components/Theme-provider'
import './index.css'
import Root from './routes'

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<QueryClientProvider client={client}>
			<ThemeProvider>
				<Root />
			</ThemeProvider>
		</QueryClientProvider>
	</BrowserRouter>
)
