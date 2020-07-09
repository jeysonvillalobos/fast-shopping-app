import { combineReducers } from 'redux';

import { products } from './productsReducer';
import { cart } from './cartReducer';
import { paginationBoxes,paginationCurrent } from './PaginationReducer';

const Reducers = combineReducers({
    products,
    cart,
    paginationBoxes,
    paginationCurrent
});

export default Reducers;