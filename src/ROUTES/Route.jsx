import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUT/Main";
import Home from "../PAGES/HOME/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default router;