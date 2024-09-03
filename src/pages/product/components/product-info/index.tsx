import React from "react"
// import { StarRating } from "@/components/star-rating";

export const ProductInfo: React.FC = function () {
  return (
    <div className="w-[1140px] flex flex-col items-start">
      <div className="w-full flex flex-row justify-between">
        <img
          src=""
          alt=""
          className="w-[555px] h-[555px] bg-cover bg-zinc-500"
        />
        <div className="">
          <div className="">
            <h1>Lorem ipsum</h1>
          </div>
          <h6>Lorem ipsum dollar amset</h6>
          <div className="">
            {/* <StarRating /> */}
            <span>5.0 (120 visualizações)</span>
          </div>
          <span>R$ 80,00</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            nesciunt maxime tempore sapiente. Labore eum tempore explicabo,
            officiis sed eos. Nam quas ducimus nostrum odit repellendus eum
            laboriosam inventore tenetur.
          </p>
          <div className="">
            <strong>Cor</strong>
            <div className="flex flex-row gap-x-[10px]">
              <div className="w-[36px] h-[36px] bg-zinc-400 rounded"></div>
            </div>
          </div>
          <div className="">
            <strong>Tamanho</strong>
            <div className="flex flex-row gap-x-[10px]">
              <div className="w-[36px] h-[36px] bg-zinc-400 rounded"></div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-start flex-row gap-x-[20px]">
        {Array.from({ length: 8 }).map(() => {
          return (
            <img src="" alt="" className="w-[123px] h-[123px] bg-zinc-500" />
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