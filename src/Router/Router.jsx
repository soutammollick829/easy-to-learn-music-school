import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/LoginPage/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'*',
            element:<ErrorPage/>
        }
      ]
    },
  ]);