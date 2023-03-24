import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.css";
import { Suspense } from "react";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/error-page";
import Contact from "./pages/contact-page";
import Forms from "./pages/forms-page";
import Payment from "./pages/payment-page";
import About from "./pages/about-page";
import Home from "./pages/home-page";

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "payments",
        element: <Payment />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <RouterProvider router={router} />
      <App />
    </React.StrictMode>
  </Suspense>
);
