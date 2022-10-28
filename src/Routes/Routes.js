import { createBrowserRouter } from "react-router-dom";
import CourseDSetails from "../CourseDetails/CourseDetails";
import Login from "../FormInfo/Login";
import Registration from "../FormInfo/Registration";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import Faq from "../Pages/Faq";
import CheckOut from "../PrivetRoute/CheckOut";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Courses></Courses>
            },
            {
                path:'course',
                element:<Courses></Courses>,
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'faq',
                element:<Faq></Faq>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'regiester',
                element:<Registration></Registration>
            },
            {
                path:'courseDetails/:id',
                element:<CourseDSetails></CourseDSetails>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'checkout/:id',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
              
            }
        ]
    }
])