import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import MainLayout from "./Components/LayOuts/MainLayout.jsx";
import PlantDetilas from "./Pages/PlantDetilas.jsx";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/plant-details/:id",
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plants/${params.id}`),
        Component: PlantDetilas,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
