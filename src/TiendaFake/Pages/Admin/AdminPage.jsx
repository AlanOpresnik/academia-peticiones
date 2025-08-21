import { useContext } from "react"
import { ProductContext } from "../../Hooks/Context/ProductContext"

export default function AdminPage() {
    const {products} = useContext(ProductContext)
  return (
    products && products.length > 0 ? (
        products.map((prod) => (
            <img src={prod.image} width={600} height={600} />
        ))
    ): (
        <div>No hay productos</div>
    ) 
)
}
