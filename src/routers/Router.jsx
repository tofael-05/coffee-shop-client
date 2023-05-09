import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import CoffeeAdded from "../component/CoffeeAdded";
import Home from "../component/Home";
import UpdateCoffee from "../component/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: ()=>fetch('http://localhost:5000/coffee')
            },
            {
                path: "/coffee-added",
                element: <CoffeeAdded/>
            },
            {
                path: "/update-coffee/:id",
                element: <UpdateCoffee />,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    },
    
])

export default router