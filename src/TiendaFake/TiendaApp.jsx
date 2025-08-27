import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import ProductosDestacadosSection from "./ProductosDestacadosSection/ProductosDestacadosSection";
import Navbar from "./components/Navbar/Navbar";
import { useCartContext } from "./Hooks/Context/CartContext";

const TiendaApp = () => {
//  const [walterSaludo, setWalterSaludo] = useState("");
  //const { mensajeCarrito } = useCartContext();
  //console.log(mensajeCarrito);

  //useEffect(() => {
    // localStorage.setItem("Saludo", "Hola walter soy el local Storage");
     
      //setWalterSaludo(localStorage.getItem('Saludo'))
  //}, []);

  return (
    <div>
      <Navbar />
      <div>
        <Banner />
      </div>
      <div className="px-4">
        <h2 className="text-3xl font-bold mt-6 mb-12">Productos destacados </h2>
        <a
          href="/otro-proyecto"
          className="p-4 mt-12 mb-12 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          OTRO PROYECTO
        </a>

        <section>
          <ProductosDestacadosSection />
        </section>
      </div>
    </div>
  );
};

export default TiendaApp;
