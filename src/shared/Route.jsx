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
import Update from "../components/Update";
import SameCountries from "../components/SameCountries";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/tourist-spot',
                element: <TouristSpot></TouristSpot>,
                loader: () => fetch('https://b9-a10-server-site-project.vercel.app/tourist-spot')
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
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/country/:country',
                element: <SameCountries></SameCountries>,
                loader: ({ params }) => fetch(`https://b9-a10-server-site-project.vercel.app/country/${params.country}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b9-a10-server-site-project.vercel.app/tourist-spot/${params.id}`)
            },
            {
                path: '/view-details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b9-a10-server-site-project.vercel.app/tourist-spot/${params.id}`)
            },
        ]
    },

]);