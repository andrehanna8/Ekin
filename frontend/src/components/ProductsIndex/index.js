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
    const scrollerBlocks = products.slice(2, 10)
    const bottomDoubleBlocks = products.slice(2, 4)

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <>
            <div className="double-blocks">
                {doubleBlocks.map( product => ( <a> <ProductsIndexItem product={product}/> </a>  ))}
            </div>
            <br></br>
            <br></br>
            <div className="product-scroller">
                {scrollerBlocks.map( product => ( <a> <ProductsIndexItem product={product}/> </a>  ))}
            </div>
            <br></br>   
            <br></br>
            <div className="double-blocks">
                {bottomDoubleBlocks.map( product => ( <a> <ProductsIndexItem product={product}/> </a>  ))}
            </div>
            <br></br>
            <br></br>
            <div className="bottom-banner">
                <a id="github" href="https://github.com/andrehanna8">Github</a>
                <a id="linkedin" href="https://www.linkedin.com/in/andre-hanna-8b1b1b1b1/">LinkedIn</a>
            </div>
            <br></br>
            <br></br>
        </>
    )
}
// FLOW OF DATA -->
//reducer, useeffect, thunkaction, controller in backend, jbuilder, goes back and dispatches to thunk, render