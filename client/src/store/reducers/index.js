import {combineReducers} from 'redux';
import authReducer from './auth.reducer'
import categoryReducer from './category.reducer'
import productReducer from './product.reducer'



const rootReducer=combineReducers({
    authReducer,
    categoryReducer,
    productReducer

})

export default rootReducer;