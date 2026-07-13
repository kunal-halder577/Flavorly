import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/HomePage/Home.jsx'
import SearchPage from './pages/SearchPage.jsx'
import IndividualResult from './components/SearchMain/IndividualResult/IndividualResult.jsx'
import NotAvailable from './pages/NotAvailable/NotAvailable.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/search",
        element: <SearchPage/>
      },
      {
        path:"/recipe/:id",
        element: <IndividualResult/>
      }
    ], 
    errorElement: <NotAvailable />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
