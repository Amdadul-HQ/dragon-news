import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

export const router =  createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                loader:() => fetch('/news.json'),
                element:<Home/>,
            }
        ]
    }
])