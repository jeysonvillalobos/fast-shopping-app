import { call,put } from 'redux-saga/effects';

import { getAllProducts } from '../Actions/HomeAction'; 

function* getProducts(action) {

    const URL = `http://localhost:8080/products/page/${action.offset}`;
    const response = yield call(fetch,URL);
    const data = yield call([response,'json']);

    yield put(getAllProducts(data));
    
}

export { getProducts };


