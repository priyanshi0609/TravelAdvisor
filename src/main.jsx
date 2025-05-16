import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/custom/Header.jsx'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  }
]);
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
