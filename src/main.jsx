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
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Profile from './components/profile/Profile.jsx';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
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
        path: "addCar",
        Component: AddCar,
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cars/:id",
        Component: CarDetails,
        loader: ({ params }) =>
          // fetch(`https://car-rent-platform-api.vercel.app/cars/${params.id}`),
          fetch(`http://localhost:3000/cars/${params.id}`)
      },
      {
        path: "myCars",
        Component: MyListings,
      },
      {
        path: "updateCar/:id",
        Component: UpdateCar,
        loader: ({ params }) =>
          // fetch(`https://car-rent-platform-api.vercel.app/cars/${params.id}`),
        fetch(`http://localhost:3000/cars/${params.id}`)
      },
      {
        path: "myBookings",
        Component: MyBookings,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
