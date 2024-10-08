import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Fisttech" />

      <RouterProvider router={routes} />
    </HelmetProvider>
  )
}
