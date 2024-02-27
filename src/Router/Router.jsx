import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import AddCoffee from "../Componentes/AddCoffee/AddCoffee";
import UpdateCoffee from "../Componentes/UpdateCoffee/UpdateCoffee";
import Home from "../Componentes/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee',
                element: <UpdateCoffee></UpdateCoffee>
            }
        ]
    }
])
export default router;