import React from "react"

export const Bestseller: React.FC = function () {
  return (
    <>
      <h1>Produtos mais vendidos</h1>
      <main className="flex justify-start flex-wrap mt-4">
        <div className="w-[280px] h-[360px] mx-auto my-3 bg-zinc-400"></div>
        <div className="w-[280px] h-[360px] mx-auto my-3 bg-zinc-400"></div>
        <div className="w-[280px] h-[360px] mx-auto my-3 bg-zinc-400"></div>
        <div className="w-[280px] h-[360px] mx-auto my-3 bg-zinc-400"></div>
      </main>
    </>
  )
}
