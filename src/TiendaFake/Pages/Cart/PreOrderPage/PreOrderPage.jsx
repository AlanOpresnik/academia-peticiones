import Navbar from "../../../components/Navbar/Navbar";
import PreOrderForm from "./PreOrderForm";

export default function PreOrderPage() {
  return (
    <>
    <Navbar/>    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          🛒 Finalizar Pedido
        </h1>
        <PreOrderForm/>
      </div>
    </div>
    </>
  );
}
