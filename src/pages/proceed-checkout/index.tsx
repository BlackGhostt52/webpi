import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import React from "react"
import { Content } from "./components/content"
import { Card } from "./components/card"

export const ProceedCheckout: React.FC = function () {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <div className="flex w-[1140px] flex-row items-stretch gap-20 mb-20">
        <Content />
        <Card />
      </div>
      <Footer />
    </div>
  )
}
