import { createBrowserRouter } from "react-router-dom"
import { ShopLayout } from "./layouts/shop-layout"
import { Home } from "./pages/home"
import { Product } from "./pages/product"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
])
