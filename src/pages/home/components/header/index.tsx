import { Heart, MagnifyingGlass, ShoppingBag } from "@phosphor-icons/react"
import React from "react"
import { Link } from "react-router-dom"

export const Header: React.FC = function () {
  return (
    <header className="w-[1140px] h-11 flex items-center justify-between my-4">
      <div className="">Logo</div>
      <nav>
        <ul className="flex items-center flex-wrap">
          <Link to="/home">
            <li className="mx-4 text-lg font-normal">Principal</li>
          </Link>
          <Link to="/shop">
            <li className="mx-4 text-lg font-normal">Comprar</li>
          </Link>
          <Link to="/our-history">
            <li className="mx-4 text-lg font-normal">Nossa História</li>
          </Link>
          <Link to="/blog">
            <li className="mx-4 text-lg font-normal">Blog</li>
          </Link>
          <Link to="/contact-us">
            <li className="mx-4 text-lg font-normal">Fale Conosco</li>
          </Link>
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <div className="flex gap-3">
          <MagnifyingGlass size={24} />
          <Heart size={24} />
          <ShoppingBag size={24} />
        </div>
        <button className="bg-zinc-900 px-8 rounded-md py-3 text-zinc-100 text-lg font-normal">
          Entrar
        </button>
      </div>
    </header>
  )
}
