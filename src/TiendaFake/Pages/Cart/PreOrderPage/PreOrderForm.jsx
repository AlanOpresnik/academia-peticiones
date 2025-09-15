import React, { useState } from "react";
import { useCartContext } from "../../../Hooks/Context/CartContext";
import toast from "react-hot-toast";
import {Link, useNavigate} from 'react-router'

export default function PreOrderForm() {
  const { setClient, cart,setCart } = useCartContext();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    direccion: "",
    tel: "",
    cart,
  });
  const [IsDisabled, setIsDisabled] = useState(true);
  const [exito, setExito] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (
      form.direccion !== "" &&
      form.email !== "" &&
      form.nombre !== "" &&
      form.tel !== ""
    ) {
      setIsDisabled(false);
    }

    if (
      form.direccion === "" ||
      form.email === "" ||
      form.nombre === "" ||
      form.tel === ""
    ) {
      setIsDisabled(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setClient(form);
    setExito(true);
    setCart([])
    
    if (exito) {
      toast.success(
        "Muchas gracias por tu compra te esta redirigiendo a la pagina de facturaion...."
      );
    }
    navigate('/cart/facturacion')
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-1">Nombre</label>
        <input
          type="text"
          name="nombre"
          onChange={(e) => handleChange(e)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Dirección</label>
        <input
          type="text"
          name="direccion"
          onChange={(e) => handleChange(e)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Teléfono</label>
        <input
          type="tel"
          name="tel"
          onChange={(e) => handleChange(e)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
        <button
          type="submit"
          disabled={IsDisabled}
          className={`w-full ${
            IsDisabled ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }  text-white py-2 px-4 rounded-lg transition-all`}
        >
          Pagar Pedido
        </button>
    </form>
  );
}
