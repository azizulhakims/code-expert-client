import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import AllCourses from "../../Pages/Courses/AllCourses";
import Course from "../../Pages/Courses/Course";
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
                path: '/courses',
                element: <AllCourses></AllCourses>

            },

            {
                path: '/category/:id',
                element: <Category></Category>,
            },

            {
                path: '/courses/:id',
                element: <Course></Course>
            },
        ]

    }
])