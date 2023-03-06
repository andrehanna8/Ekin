import { Link } from "react-router-dom"


export default function ProductsIndexItem({product}) {

    return (
        <Link to={`/products/${product.id}`}> 
            <div className="product-index-item">
                <h1> {product.name}</h1>
                <h2> {product.description} </h2>
            </div>
        </Link>
    
    )
}