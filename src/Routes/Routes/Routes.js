import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import AllCourses from "../../Pages/Courses/AllCourses";
import Course from "../../Pages/Courses/Course";
import CourseDetailData from "../../Pages/Courses/CourseDetailData";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";


import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/category',
                element: <AllCourses></AllCourses>,
                children: [
                    {
                        path: ':id',
                        element: <Category></Category>,
                        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
                    }
                ]
            },

            {
                path: '/courses',

                children: [
                    {
                        path: '',
                        element: <Course></Course>,
                        loader: ({ params }) => fetch(`http://localhost:5000/courses`),
                    },
                    {
                        path: ':id',
                        element: <PrivateRoute><CourseDetailData></CourseDetailData></PrivateRoute>,
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                    }
                ]
            },


        ]

    }
])