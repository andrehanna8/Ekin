import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchProducts} from "../../store/products"
import ProductsIndexItem from "../ProductsIndexItem"
// rootreducer takes care setting up the whole state of the application
export default function Products() {
    const products = useSelector(state => Object.values(state.products))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <>
            {products.map( product => ( <ProductsIndexItem product={product}/> ))}
        </>
    )
}
// FLOW OF DATA -->
//reducer, useeffect, thunkaction, controller in backend, jbuilder, goes back and dispatches to thunk, render