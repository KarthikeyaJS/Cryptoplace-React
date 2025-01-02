import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <CoinContextProvider>
  <App />  
  </CoinContextProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
