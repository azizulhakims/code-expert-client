import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import AllCourses from "../../Pages/Courses/AllCourses";
import Course from "../../Pages/Courses/Course";
import CourseDetailData from "../../Pages/Courses/CourseDetailData";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
                        element: <CourseDetailData></CourseDetailData>,
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                    }
                ]
            },
        ]

    }
])