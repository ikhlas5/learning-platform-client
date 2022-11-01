import { createBrowserRouter } from "react-router-dom";
import CourseDSetails from "../CourseDetails/CourseDetails";
import Login from "../FormInfo/Login";
import Registration from "../FormInfo/Registration";
import Home from "../Home/Home";
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
                element:<Home></Home>
            },
            {
                path:'courses',
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
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-ikhlas5.vercel.app/course/${params.id}`)
            },
            {
                path:'checkout/:id',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader:({params}) => fetch(`https://b610-lerning-platform-server-side-ikhlas5.vercel.app/info/${params.id}`)
                
            },
            {
                path:'*',
                element:<div className="text-red-600  text-center" >Ops! Sorry Page not found:404!</div>
              }
        ]  
    }
])