import { combineReducers } from 'redux';

import HomeReducer from './HomeReducer';
import { paginationBoxes,paginationCurrent } from './PaginationReducer';

const Reducers = combineReducers({
    HomeReducer,
    paginationBoxes,
    paginationCurrent
});

export default Reducers;