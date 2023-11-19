
import React from 'react'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { RouterProvider} from 'react-router-dom'
import router from './CommonRouter/CommonRouter.jsx'

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App