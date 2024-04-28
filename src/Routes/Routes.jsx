import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MyBookings from "../Pages/Bookings/MyBookings";
import CheckoutPage from "../Pages/Checkout/CheckoutPage";
import HomePage from "../Pages/Home/Home/HomePage";
import LoginPage from "../Pages/Login/LoginPage";
import SignupPage from "../Pages/Signup/SignupPage";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "checkout/:id",
        element: <CheckoutPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoutes>
            <MyBookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
