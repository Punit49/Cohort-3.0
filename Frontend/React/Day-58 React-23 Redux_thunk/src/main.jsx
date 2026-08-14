import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { store } from './app/store.jsx'
import { Provider } from "react-redux"
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes />
    <Toaster />
  </Provider>
)
