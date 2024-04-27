import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import TouristSpot from "../pages/TouristSpot";
import AddTourist from "../pages/AddTourist";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";
import ViewDetails from "../components/ViewDetails";

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
                element: <TouristSpot></TouristSpot>,
                loader: () => fetch('http://localhost:5000/tourist-spot')
            },
            {
                path: '/add-tourist',
                element: <PrivateRoute><AddTourist></AddTourist></PrivateRoute>
            },
            {
                path: '/my-list',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/view-details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/tourist-spot/${params.id}`)
            },
        ]
    },

]);