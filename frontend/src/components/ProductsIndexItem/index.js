import { Link } from "react-router-dom"
import "./ProductIndexItem.css"

export default function ProductsIndexItem({product}) {
    // const productId = product.id
    // const productObj = useSelector(getProduct(product.id))
    return (
        
        <Link to={`/products/${product.id}`}> 
            <div className="product-index-item">
                <img src={product.photoUrl} alt="" />
            </div>
        </Link>
    
    )
}