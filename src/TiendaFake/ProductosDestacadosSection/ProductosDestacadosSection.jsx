import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { ProductContext } from "../Hooks/Context/ProductContext";

export default function ProductosDestacadosSection() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <div>
        {products && products.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
            {products.map((prod) => (
              <ProductCard prod={prod} />
            ))}
          </div>
        ) : (
          <div>
            <p>NO SE ENCONTRARON PROCUTOS</p>
          </div>
        )}
      </div>
    </div>
  );
}
