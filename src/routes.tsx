import { createBrowserRouter } from "react-router-dom"
import { ShopLayout } from "./layouts/shop-layout"
import { Home } from "./pages/home"
import { ProductList } from "./pages/product-list"
import { Product } from "./pages/product"
import { SignIn } from "./pages/sign-in"
import { SignUp } from "./pages/sign-up"
import { ForgotPassword } from "./pages/forgot-password"
import { ResetPassword } from "./pages/reset-password"
import { Checkout } from "./pages/checkout"
import { ProceedCheckout } from "./pages/proceed-checkout"
import { ProfileLayout } from "./layouts/profile-layout"
import { Orders } from "./pages/orders"
import { PersonalInformation } from "./pages/personal-information"
import { Wishes } from "./pages/wishes"
import { ManageAddresses } from "./pages/manage-addresses"
import { SavedCards } from "./pages/saved-cards"
import { Notifications } from "./pages/notifications"

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
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/shipping-address",
        element: <ProceedCheckout />,
      },
    ],
  },
  {
    path: '/profile',
    element: <ProfileLayout />,
    children: [
      {
        path: '/profile/orders',
        element: <Orders />
      },
      {
        path: "/profile/personal-information",
        element: <PersonalInformation />
      },
      {
        path: "/profile/wishes",
        element: <Wishes />
      },
      {
        path: "/profile/manage-addresses",
        element: <ManageAddresses />
      },
      {
        path: "/profile/saved-cards",
        element: <SavedCards />
      },
      {
        path: "/profile/notifications",
        element: <Notifications />
      }
    ]
  }
])
