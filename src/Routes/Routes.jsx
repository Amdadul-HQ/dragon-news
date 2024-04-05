import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import NewsFeedDetails from "../Pages/NewsFeedDetails/NewsFeedDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
            },
            {
                path:'/news/:id',
                element:<NewsFeedDetails/>,
                loader:() => fetch('/news.json')
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])