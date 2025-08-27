import { useState } from "react"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCartContext } from "../../../../Hooks/Context/CartContext"



const CartSection = () => {

  const {cart} = useCartContext();
  console.log(cart)




  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Carrito de Compras</h1>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {cart ? cart.length :  '0'} artículos
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Artículos en tu carrito</h2>
              </div>

              <div className="divide-y">
                {cart.length === 0 ? (
                  <div className="p-8 text-center">
                    <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
                    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Continuar comprando
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    //AGREGAR A UN COMPONENTE
                    <div key={item.id} className="p-6 flex items-center gap-4">
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
                        <button
                         
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>

                        <span className="w-8 text-center font-medium">{item.quantity}</span>

                        <button
                          
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${item.price }</p>
                      </div>

                      <button
                    
                        className="text-red-500 hover:text-red-700 p-2 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumen del pedido</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal  artículos</span>
                  <span>$000</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío</span>
                  <span>$9.99</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Impuestos</span>
                  <span>$2000</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total</span>
                  <span>$2000</span>
                </div>
              </div>

              <button
                disabled={cart.length === 0}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Proceder al pago
              </button>

              <button className="w-full mt-3 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Continuar comprando
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSection
