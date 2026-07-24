import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import AppContext from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
    <AppContext>
      <AppRoutes />
    </AppContext>
)
