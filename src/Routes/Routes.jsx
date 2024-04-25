import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Home/Home/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <HomePage/>
        }, 
      ]
    },
  ]);