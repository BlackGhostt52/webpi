import React from "react"
import { Helmet } from "react-helmet-async"
import { Header } from "./components/header"
import { Categories } from "./components/categories"

export const Home: React.FC = function () {
  return (
    <>
      <Helmet title="Principal" />
      <div className="w-screen h-screen flex flex-col items-center">
        <Header />
        <Categories />
      </div>
    </>
  )
}
