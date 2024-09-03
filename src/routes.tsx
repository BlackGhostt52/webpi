import { createBrowserRouter } from "react-router-dom"
import { ShopLayout } from "./layouts/shop-layout"
import { Home } from "./pages/home"
import { ProductList } from "./pages/product-list"
import { Product } from "./pages/product"
import { SignIn } from "./pages/sign-in"
import { SignUp } from "./pages/sign-up"
import { ForgotPassword } from "./pages/forgot-password"
import { ResetPassword } from "./pages/reset-password"

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
        path: "/product-list",
        element: <ProductList />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
])
