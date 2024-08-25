import { Router, RouterProvider } from "react-router-dom"
import "./Styles/Common.scss"
import router from "./Routes"

function App() {

  return (
    <>
   <RouterProvider router={router}/>
     
    </>
  )
}

export default App
