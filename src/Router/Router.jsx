import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import AddCoffee from "../Componentes/AddCoffee/AddCoffee";
import UpdateCoffee from "../Componentes/UpdateCoffee/UpdateCoffee"
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
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
                // loader: ({params}) =>(`http://localhost:5000/coffee/${params.id}`)
                
            }
        ]
    }
])
export default router;