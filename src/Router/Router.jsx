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
import InstructorsDashboard from "../Pages/instructorsDashboard/InstructorsDashboard";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManageClass from "../Pages/Dashboard/manageClass/ManageClass";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/dashboard/students',
          element:<MyDashboard/>
        },
        {
          path:'/dashboard/allStudents',
          element: <AdminRoute><AllStudents/></AdminRoute>
        },
        {
          path:'/dashboard/instructors',
          element:<AdminRoute><InstructorsDashboard/></AdminRoute>
        },
        {
          path:'/dashboard/manage-class',
          element:<AdminRoute><ManageClass/></AdminRoute>
        },
        {
          path:'/dashboard/payment',
          element:<Payment/>
        },
        {
          path:'*',
          element:<ErrorPage/>
      }
      ]
    }
  ]);