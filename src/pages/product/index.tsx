import React from "react"
import { ProductInfo } from "./components/product-info"
import { Helmet } from "react-helmet-async"
import { RelatedProduct } from "./components/related-product"
import { Footer } from "../home/components/footer"

export const Product: React.FC = function () {
  return (
    <>
      <Helmet title="Product Name" />
      <div className="w-full h-full flex flex-wrap justify-center">
        <ProductInfo />
        <RelatedProduct />
        <Footer />
      </div>
    </>
  )
}
