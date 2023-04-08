import { Link } from "react-router-dom"
import "./BlockProductIndexItem.css"

export default function BlockProductIndexItem({product}) {
    // const productId = product.id
    // const productObj = useSelector(getProduct(product.id))
    return (
        
        
            <div className="block-product-index-item">
                <Link to={`/products/${product.id}`}> 
                <img id="block-img" src={product.photoUrl} alt="" />
                </Link>
            </div>
        
    
    )
}