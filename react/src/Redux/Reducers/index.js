import { combineReducers } from 'redux';

import { products } from './productsReducer';
import { users } from './usersReducer';
import { cart } from './cartReducer';
import { paginationBoxes,paginationCurrent } from './PaginationReducer';

const Reducers = combineReducers({
    products,
    cart,
    users,
    paginationBoxes,
    paginationCurrent
});

export default Reducers;