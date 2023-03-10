import { Link } from "react-router-dom"
import "./BlockProductIndexItem.css"

export default function BlockProductIndexItem({product}) {
    // const productId = product.id
    // const productObj = useSelector(getProduct(product.id))
    return (
        
        <Link to={`/products/${product.id}`}> 
            <div className="block-product-index-item">
                <img id="block-img" src={product.photoUrl} alt="" />
            </div>
        </Link>
    
    )
}