import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
import { useCartContext } from "../../../../Hooks/Context/CartContext";

export default function ProductCard({item}) {
  const {removeProductCart} = useCartContext();
  return (
    <div className="p-6 flex items-center gap-4">
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg border"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Minus className="w-4 h-4" />
        </button>

        <span className="w-8 text-center font-medium">{item.quantity}</span>

        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="text-right">
        <p className="font-semibold text-gray-900">${item.price}</p>
      </div>

      <button onClick={() => removeProductCart(item)} className="text-red-500 hover:text-red-700 p-2 transition-colors">
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
