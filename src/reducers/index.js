import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import shopReducer from './shoppingcart.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    products: shopReducer
})

export default rootReducer;