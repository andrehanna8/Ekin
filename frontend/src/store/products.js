
export const RECIEVE_PRODUCTS = 'products/RECIEVE_PRODUCTS';
export const RECIEVE_PRODUCT = 'products/RECIEVE_PRODUCT';
// export const REMOVE_PRODUCT = 'products/REMOVE_PRODUCT';

export const recieveProducts = (products) => {
    return ({
        type: RECIEVE_PRODUCTS,
        products
})
};

export const recieveProduct = (product) => {
    return ({
        type: RECIEVE_PRODUCT,
        product
    })
};


export const getProducts = (state) => (
    state.products ? Object.values(state.products) : []
)

export const getProduct = (productId) => (state) => (
    state.products ? state.products[productId] :null
)

export const fetchProducts = () => async (dispatch) => {
    const response = await fetch('/api/products');
    if (response.ok) {
        const products = await response.json();
        dispatch(recieveProducts(products));
    }
    
}

export const fetchProduct = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}`);
    if (response.ok) {
        const product = await response.json();
        dispatch(recieveProduct(product));
    }
}


const productsReducer = (state = {}, action) => {
    let newState = {...state}

    switch (action.type) {

        case RECIEVE_PRODUCTS:
            return action.products;
        case RECIEVE_PRODUCT:
            newState[action.product.id] = action.product;
            return newState;
        default:
            return state;
    }
}

export default productsReducer;