import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUT/Main";
import Home from "../PAGES/HOME/Home/Home";
import Categorie from "../PAGES/HOME/Categorie/Categorie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/categorie/:idName",
                element: <Categorie></Categorie>
            }
        ]
    }
])

export default router;