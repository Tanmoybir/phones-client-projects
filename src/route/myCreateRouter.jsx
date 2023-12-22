import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Phones from "../pages/Phone/Phones";
import About from "../pages/About/About";

const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/phones',
                element:<Phones/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/login',
                element:<Phones/>
            },
            {
                path:'/register',
                element:<Phones/>
            }
        ]
    }
])

export default myCreateRouter;