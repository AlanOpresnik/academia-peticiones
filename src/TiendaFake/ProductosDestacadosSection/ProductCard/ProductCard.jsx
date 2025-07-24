import React from "react";

export default function ProductCard({ prod }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="group relative">
          <img
            alt={prod.title}
            src={prod.image}
            className="aspect-square w-full object-contain rounded-md  group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />
          <div className="mt-4 ">
            <div>
              <h3 className="font-semibold text-gray-700">
                <a href={`/productos/${prod.id}`} className="relative">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {prod.title}
                </a>
              </h3>
              <p className="mt-1 text-sm line-clamp-2 text-gray-500">{prod.description}</p>
            </div>
            <p className="text-xl mt-4 font-medium text-gray-900">${prod.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
