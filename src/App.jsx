import { RouterProvider } from 'react-router-dom'
import route from './routes/route.jsx'
import {Toaster} from 'react-hot-toast'
import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={route}/>
      <Toaster/>
    </>
    
  )
}

export default App
