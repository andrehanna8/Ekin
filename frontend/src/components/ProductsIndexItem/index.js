import { Link } from "react-router-dom"
import "./ProductIndexItem.css"


export default function ProductsIndexItem({product}) {

    return (
        <Link to={`/products/${product.id}`}> 
            <div className="product-index-item">
                {/* <h1> {product.name}</h1>
                <h2> {product.description} </h2>
                <h3> {product.price} </h3> */}
                <img src="https://pixy.org/download/4274607/" alt="bruh" />
            </div>
        </Link>
    
    )
}