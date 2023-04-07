import csrfFetch from "./csrf";

export const RECIEVE_CART_ITEMS = 'cartItems/RECIEVE_CART_ITEMS';
export const RECIEVE_CART_ITEM = 'cartItems/RECIEVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'cartItems/REMOVE_CART_ITEM';
export const CLEAR_CART_ITEMS = 'cartItems/CLEAR_CART_ITEMS';

export const recieveCartItems = (cartItems) => {
    return ({
        type: RECIEVE_CART_ITEMS,
        cartItems
    })
};

export const recieveCartItem = (cartItem) => {
    return ({
        type: RECIEVE_CART_ITEM,
        cartItem
    })
};

export const removeCartItem = (cartItemId) => {
    return ({
    type: REMOVE_CART_ITEM,
    cartItemId
    })
};

export const clearCartItems = () => {
    return ({
        type: CLEAR_CART_ITEMS
    })
};


export const getCartItems = (state) => (
    state.cartItems ? Object.values(state.cartItems) : []
)

export const getCartItem = (cartItemId) => (state) => (
    state.cartItems ? state.cartItems[cartItemId] : null
)

export const fetchCartItems = () => async (dispatch) => {
    const response = await fetch('/api/cart_items');
    if (response.ok) {
        const cartItems = await response.json();
        dispatch(recieveCartItems(cartItems));
    }
}

export const fetchCartItem = (cartItemId) => async (dispatch) => {
    const response = await fetch(`/api/cart_items/${cartItemId}`);
    if (response.ok) {
        const cartItem = await response.json();
        dispatch(recieveCartItem(cartItem));
    }
}

export const deleteCartItem = (cartItemId) => async (dispatch) => {
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    });
    
    if (response.ok) {
        dispatch(removeCartItem(cartItemId));
    }
}

export const createCartItem = (cartItem) => async (dispatch) => {
    const response = await csrfFetch('/api/cart_items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(cartItem)
    });
    if (response.ok) {
        const newCartItem = await response.json();
        dispatch(recieveCartItem(newCartItem));
        return response;
    } else {
        const errors = await response.json();
        return errors;
    }
}

export const updateCartItem = (cartItem) => async (dispatch) => {
    const response = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
    });

    if (response.ok) {
        const updatedCartItem = await response.json();
        dispatch(recieveCartItem(updatedCartItem));
    }
}

export const clearCart = () => async (dispatch) => {
    const response = await csrfFetch('/api/cart_items/clear', {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(clearCartItems());
    }
}


const cartItemsReducer = (state = {}, action) => {
    const newState = {...state}
    switch (action.type) {
        case RECIEVE_CART_ITEMS:
            return action.cartItems
        case RECIEVE_CART_ITEM:
            newState[action.cartItem.id] = action.cartItem;
            return newState;
        case REMOVE_CART_ITEM:
            const cartItemId = action.cartItemId;
            delete newState[cartItemId];
            return newState;
        case CLEAR_CART_ITEMS:
            return {}
        default:
            return state;
    }
}


export default cartItemsReducer;
