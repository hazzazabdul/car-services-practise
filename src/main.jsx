import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className="max-w-7xl mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </main>
);
