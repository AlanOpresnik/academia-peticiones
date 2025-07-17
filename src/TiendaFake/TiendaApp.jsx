import Banner from "./Banner/Banner";
import ProductosDestacadosSection from "./ProductosDestacadosSection/ProductosDestacadosSection";

const TiendaApp = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="px-4">
        <h2 className="text-3xl font-bold mt-6">Productos destacados</h2>
        <section>
          <ProductosDestacadosSection />
        </section>
      </div>
    </div>
  );
};

export default TiendaApp;
