import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import aletReducer from './aletReducer';

export default combineReducers({
    products: productsReducer,
    alert: aletReducer
});