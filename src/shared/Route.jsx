import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import TouristSpot from "../pages/TouristSpot";
import AddTourist from "../pages/AddTourist";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/tourist-spot',
                element:<TouristSpot></TouristSpot>
            },
            {
                path: '/add-tourist',
                element:<AddTourist></AddTourist>
            },
            {
                path: '/my-list',
                element:<MyList></MyList>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
        ]
    },

]);