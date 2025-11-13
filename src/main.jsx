import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout.jsx';
import Home from './components/home/Home.jsx';
import AddCar from './components/addCar/AddCar.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Login from './components/login/Login.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import MyListings from './components/myListings/MyListings.jsx';
import UpdateCar from './components/updateCar/UpdateCar.jsx';
import AllCars from './components/allCars/AllCars.jsx';
import CarDetails from './components/carDetails/CarDetails.jsx';
import MyBookings from './components/myBookings/MyBookings.jsx';
import Register from './register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allCars",
        Component: AllCars,
      },
      {
        path: "/cars/:id",
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/cars/${params.id}`),
      },
      {
        path: "addCar",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "myCars",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "updateCar/:id",
        element: (
          <PrivateRoute>
            <UpdateCar></UpdateCar>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/cars/${params.id}`),
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
