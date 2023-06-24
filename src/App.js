import Cart from "./components/cart";
import Categories from "./components/categories";
import ErrorPage from "./components/errorpage";
import FavList from "./components/favlist";
import Home from "./components/home";
import Layout from "./components/layout";
import Single from "./components/single";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home/> },
      {
        path: "single",
        children: [
          { index: true, element: <Home/> },
          { path: ":id", element: <Single/> },
        ]
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "categories",
        children: [
          { path: ":id", element: <Categories/> },
        ]
      },
      {
        path: "favlist",
        element: <FavList/>,
      },
    ]
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
