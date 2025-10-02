import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import MainLayout from "./Components/LayOuts/MainLayout.jsx";
import PlantDetilas from "./Pages/PlantDetilas.jsx";
import axios from "axios";
import ContactUs from "./Pages/ContactUs.jsx";
import Loadingspinner from "./Components/Loadingspinner.jsx";
import Cart from "./Pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loadingspinner />,
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
        Component: ContactUs,
      },
      {
        path: "/about",
        hydrateFallbackElement: <Loadingspinner></Loadingspinner>,
        Component: About,
      },
      {
        path: "/plant-details/:id",
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        Component: PlantDetilas,
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
