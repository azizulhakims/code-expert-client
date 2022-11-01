import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog";
import Category from "../../Pages/Category/Category/Category";
import AllCourses from "../../Pages/Courses/AllCourses";
import Course from "../../Pages/Courses/Course";
import CourseDetailData from "../../Pages/Courses/CourseDetailData";
import Premium from "../../Pages/Courses/Premium";
import SinglePremium from "../../Pages/Courses/SinglePremium";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";


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
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },

            {
                path: '/premium',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                children: [
                    {
                        path: ':id',
                        element: <SinglePremium />,
                        loader: ({ params }) => fetch(`https://code-expart-server.vercel.app/courses/${params.id}`)
                    }
                ]

            },

            {
                path: '/category',
                element: <AllCourses></AllCourses>,
                children: [
                    {
                        path: ':id',
                        element: <Category></Category>,
                        loader: ({ params }) => fetch(`https://code-expart-server.vercel.app/categories/${params.id}`)
                    }
                ]
            },

            {
                path: '/courses',

                children: [
                    {
                        path: '',
                        element: <Course></Course>,
                        loader: ({ params }) => fetch(`https://code-expart-server.vercel.app/courses`),
                    },
                    {
                        path: ':id',
                        element: <CourseDetailData></CourseDetailData>,
                        loader: ({ params }) => fetch(`https://code-expart-server.vercel.app/courses/${params.id}`),

                    },




                ]
            },


        ]

    }
])