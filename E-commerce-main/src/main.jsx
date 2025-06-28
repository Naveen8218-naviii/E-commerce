import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import ShopcontextPro from './component/shopcontext.jsx'
createRoot(document.getElementById('root')).render(
  <ShopcontextPro>
    <App />
  </ShopcontextPro>,
)
