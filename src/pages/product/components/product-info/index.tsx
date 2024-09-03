import { StarRating } from "@/components/star-rating"
import { Button } from "@/components/ui/button"
import React from "react"
import { Increment } from "../increment"
import { Favorite } from "../favorite"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"

export const ProductInfo: React.FC = function () {
  return (
    <div className="w-[1140px] flex flex-col items-start">
      <Navigation />
      <div className="w-full flex flex-row justify-between mt-4">
        <img
          src=""
          alt=""
          className="w-[555px] h-[555px] bg-cover bg-zinc-500"
        />
        <div className="w-[545px] h-[555px] flex flex-col items-start justify-center">
          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">Lorem ipsum</h1>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-600 rounded-md"
            >
              No estoque
            </Badge>
          </div>
          <h6 className="text-xl mt-2">Lorem ipsum dollar amset</h6>
          <div className="flex flex-row mt-2">
            <StarRating rating={5} totalStars={5} />
            <span className="text-zinc-500 ml-2">5.0 (120 visualizações)</span>
          </div>
          <div className="mt-2">
            <span className="text-lg font-normal">R$ 80,00</span>
            <span className="ml-2 line-through text-zinc-500 text-lg">
              R$ 200,00
            </span>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            nesciunt maxime tempore sapiente. Labore eum tempore explicabo,
            officiis sed eos. Nam quas ducimus nostrum odit repellendus eum
            laboriosam inventore tenetur.
          </p>
          <div className="mt-4">
            <strong>Cor</strong>
            <div className="flex flex-row gap-x-[10px] mt-2">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    className="w-[36px] h-[36px] bg-zinc-400 rounded"
                  ></div>
                )
              })}
            </div>
          </div>
          <div className="mt-4">
            <strong>Tamanho</strong>
            <div className="flex flex-row gap-x-[10px] mt-2">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    className="w-[36px] h-[36px] bg-zinc-400 rounded"
                  ></div>
                )
              })}
            </div>
          </div>
          <div className="flex w-full gap-[20px] mt-11">
            <Increment />
            <Button className="p-6 w-[339px] bg-zinc-950">
              Adicionar no carrinho
            </Button>
            <Favorite />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-start flex-row gap-x-[20px] mt-4">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <img
              key={index}
              src=""
              alt=""
              className="w-[125px] h-[125px] bg-zinc-500"
            />
          )
        })}
      </div>

      <div className="">
        <nav>
          <ul>
            <li>Descrição</li>
            <li>Informações adicionais</li>
            <li>Reviews</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
