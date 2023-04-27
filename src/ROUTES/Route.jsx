import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../LAYOUT/LoginLayout";
import MainLayout from "../LAYOUT/MainLayout";
import NewsLayout from "../LAYOUT/NewsLayout";
import SignUpLayout from "../LAYOUT/RegisterLayout";
import Categorie from "../PAGES/HOME/Categorie/Categorie";
import Home from "../PAGES/HOME/Home/Home";
import News from "../PAGES/HOME/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/news")
            },
            {
                path: "/categorie/:id",
                element: <Categorie></Categorie>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path: "login",
        element: <LoginLayout></LoginLayout>,
    },
    {
        path: "signup",
        element: <SignUpLayout></SignUpLayout>
    }
])

export default router;