import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import React from "react"
import { Content } from "./components/content"
import { Card } from "./components/card"

export const ShippingAddress: React.FC = function () {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <h1 className="w-[1140px] text-3xl text-zinc-950 font-medium my-[50px]">
        Endereço para envio
      </h1>
      <div className="flex flex-row items-stretch gap-20 mb-20">
        <Content />
        <Card />
      </div>
      <Footer />
    </div>
  )
}
