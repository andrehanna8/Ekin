import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchProducts} from "../../store/products"
import ProductsIndexItem from "../ProductsIndexItem"

import "./ProductsIndex.css"

// rootreducer takes care setting up the whole state of the application
export default function Products() {
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch()

    const doubleBlocks = products.slice(0, 2)
    const scrollerBlocks = products.slice(2, products.length)

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <>
            <div className="double-blocks">
                {doubleBlocks.map( product => ( <a> <ProductsIndexItem product={product}/> </a>  ))}
            </div>
            <div className="product-scroller">
                {scrollerBlocks.map( product => ( <a> <ProductsIndexItem product={product}/> </a>  ))}
            </div>
        </>
    )
}
// FLOW OF DATA -->
//reducer, useeffect, thunkaction, controller in backend, jbuilder, goes back and dispatches to thunk, render