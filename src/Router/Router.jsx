import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import AddCoffee from "../Componentes/AddCoffee/AddCoffee";
import UpdateCoffee from "../Componentes/UpdateCoffee/UpdateCoffee";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
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