import { takeLatest, all } from 'redux-saga/effects';

import { getProducts } from './HomeSaga';
import { countBox } from './PaginationSaga';

export default function* rootSaga(){
    yield all([
        takeLatest('GET_PRODUCT_SUCCESS',getProducts),
        takeLatest('GET_BOXES',countBox)
    ]);
}