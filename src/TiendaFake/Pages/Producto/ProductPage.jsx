import React, { useContext, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useParams } from "react-router";
import { ProductContext } from "../../Hooks/Context/ProductContext";
import { useCartContext } from "../../Hooks/Context/CartContext";
import Navbar from '../../components/Navbar/Navbar'

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); // -> cargando producto...
  const {addCart, cart} = useCartContext();
    const { mensaje } = useContext(ProductContext);
    console.log(mensaje)

    console.log(cart)

  const { id } = useParams(); // Extrae el ID del producto de la URL

  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const res = await fetch(`${api}/${id}`, {
          method: "GET",
        }).then((res) => res.json());

        if (!res) {
          console.log("HUBO UN ERROR AL OBTENER EL PRODUCTO");
        }
        setProduct(res);
        setLoading(false); // -> ya no está cargando y muestra el producto
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      }
    };
    obtenerProducto();
  }, []);


  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-6 py-12">
      {loading ? (
        <div className="text-center">
          <p>Cargando producto...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagen principal + miniaturas */}
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[600px] rounded-2xl shadow-lg object-contain"
              />
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                  }`}
                  />
                ))}
              <span className="text-gray-600">(123 reseñas)</span>
            </div>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price}
              </span>
            </div>
            <button onClick={() => addCart(product)} className="w-full md:w-auto bg-indigo-800 text-white rounded-full px-8 py-4 text-lg cursor-pointer">
              Añadir al carrito
            </button>
          </div>
        </div>
      )}
    </div>
      </>
  );
}
