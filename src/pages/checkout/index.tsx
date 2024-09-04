import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import React from "react"
import { Content } from "./components/content"

export const Checkout: React.FC = function () {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
