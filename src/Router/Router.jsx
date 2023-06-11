import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/SignupPage/SignUp";
import MyClasses from "../Pages/MyClasses/MyClasses";
import PrivateRoute from "./Private/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyDashboard from "../Pages/Dashboard/MyDashboard";
import InstructorsPage from "../Pages/instructorsPage/InstructorsPage";
import AllStudents from "../Pages/Dashboard/AllStudentsPage/AllStudents";

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
            path:'/sign-up',
            element:<SignUp/>
        },
        {
          path:'/classes',
          element: <MyClasses/>
        },
        {
          path:'/instructors',
          element:<PrivateRoute><InstructorsPage/></PrivateRoute>
        },
        {
            path:'*',
            element:<ErrorPage/>
        }
      ]
    },
    {
      path:'/dashboard',
      element: <Dashboard/>,
      children:[
        {
          path:'/dashboard/students',
          element:<MyDashboard/>
        },
        {
          path:'/dashboard/allStudents',
          element: <AllStudents/>
        }
      ]
    }
  ]);