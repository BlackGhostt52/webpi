import { Heart, MagnifyingGlass, ShoppingBag } from "@phosphor-icons/react"
import React from "react"
import { Link } from "react-router-dom"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
          <MagnifyingGlass size={24} weight="regular" />
          <Heart size={24} weight="regular" />
          <ShoppingBag size={24} weight="regular" />
        </div>
        <button className="bg-zinc-900 px-8 rounded-md py-3 text-zinc-100 text-lg font-normal">
          Entrar
        </button>
      </div>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  )
}
