import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./DefaultLayout/DefaultLayout";
import Home from "../App/Home/Home";
import Herobanner from "../App/Home/Herobanner";
import Profile from "../App/Profile";


const router = createBrowserRouter([
    {
         path:"/Herobanner",
         element:<Herobanner/>
    },
  
   
    {
        path:"/",
        element:<DefaultLayout/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/Profile",
                element:<Profile/>
                    
            },
           
        ]
    },
    {
        path: "*",
        element: <h1>Page Not Found</h1>,
    }

])

export default  router;
