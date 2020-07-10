import { takeLatest, all } from 'redux-saga/effects';

import { getProducts } from './productsSaga';
import { insertUserDB,searchUserDB,insertUserByEmail } from './usersSaga';
import { countBox } from './PaginationSaga';

export default function* rootSaga(){
    yield all([
        takeLatest('GET_PRODUCT_SUCCESS',getProducts),
        takeLatest('INSERT_USER_SUCCESS',insertUserDB),
        takeLatest('SEARCH_USER_SUCCESS',searchUserDB),
        takeLatest('INSERT_USER_BY_EMAIL',insertUserByEmail),
        takeLatest('GET_BOXES',countBox)
    ]);
}