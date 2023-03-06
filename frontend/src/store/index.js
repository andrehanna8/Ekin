import {legacy_createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import session from './session'
import reviews from './reviews'
import productsReducer from './products'
import cartItemsReducer from './cartItems'

const rootReducer = combineReducers({
    session,
    products: productsReducer,
    cartItems: cartItemsReducer,
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
  } else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
  }

  const configureStore = (preloadedState) => {
    return legacy_createStore(rootReducer, preloadedState, enhancer)
  }

  export default configureStore