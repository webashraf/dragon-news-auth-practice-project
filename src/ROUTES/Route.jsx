import { createBrowserRouter } from "react-router-dom";
// import Main from "../LAYOUT/MainLayout";
import Categorie from "../PAGES/HOME/Categorie/Categorie";
import Home from "../PAGES/HOME/Home/Home";
// import Main2 from "../LAYOUT/NewsLayout";
import MainLayout from "../LAYOUT/MainLayout";
import NewsLayout from "../LAYOUT/NewsLayout";
import News from "../PAGES/HOME/News/News";

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
                element: <News></News>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;