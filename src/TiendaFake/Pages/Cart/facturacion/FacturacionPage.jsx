export default function FacturacionPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col gap-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Facturación</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow">
          Volver a la página
        </button>
      </header>

      {/* Datos del Usuario */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-xl font-semibold">Datos del Cliente</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Nombre</p>
            <p className="text-gray-900 font-medium">Alan</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Apellido</p>
            <p className="text-gray-900 font-medium">Opresnik</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Correo</p>
            <p className="text-gray-900 font-medium">alan@email.com</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Teléfono</p>
            <p className="text-gray-900 font-medium">+54 11 1234-5678</p>
          </div>
        </div>
      </section>

      {/* Productos Comprados */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-xl font-semibold">Productos Comprados</h2>
        <div className="divide-y">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Producto"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">Producto 1</p>
                <p className="text-gray-500 text-sm">Descripción breve</p>
              </div>
            </div>
            <p className="text-gray-900 font-semibold">$29.00</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Producto"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">Producto 2</p>
                <p className="text-gray-500 text-sm">Descripción breve</p>
              </div>
            </div>
            <p className="text-gray-900 font-semibold">$49.00</p>
          </div>
        </div>
        <div className="flex justify-end pt-4 border-t">
          <p className="text-lg font-bold text-gray-900">Total: $78.00</p>
        </div>
      </section>

      {/* Historial de Facturación */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Historial de Facturación</h2>
        <table className="w-full text-left text-gray-700">
          <thead className="border-b">
            <tr>
              <th className="pb-2">Fecha</th>
              <th className="pb-2">Descripción</th>
              <th className="pb-2">Monto</th>
              <th className="pb-2 text-right">Factura</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">Sept 1, 2025</td>
              <td>Compra de productos</td>
              <td>$78.00</td>
              <td className="text-right">
                <button className="text-blue-600 hover:underline">Descargar</button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3">Ago 1, 2025</td>
              <td>Compra de productos</td>
              <td>$42.00</td>
              <td className="text-right">
                <button className="text-blue-600 hover:underline">Descargar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
