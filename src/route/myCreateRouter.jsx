import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Phones from "../pages/Phone/Phones";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PhoneDetails from "../components/Shared/PhoneDetails/PhoneDetails";


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
                element:<Phones/>,
                loader: () => fetch('http://localhost:5000/phones')
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/phone/:id',
                element:<PhoneDetails/>,
                loader:({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
                 
            }
        ]
    }
])

export default myCreateRouter;