import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../../components/header";
import { Navigation } from "./components/navigation";
import { Filter } from "./components/filter";
import { Main } from "./components/main";
import { Footer } from "@/components/footer";

export const ProductList: React.FC = function() {
    return (
        <>
            <Helmet title="Pesquisa de Produtos" />
            <div className="w-full h-full flex flex-col items-center">
                <Header />
                <Navigation />
                <Filter />
                <Main />
                <Footer />
            </div>
        </>
    )
}