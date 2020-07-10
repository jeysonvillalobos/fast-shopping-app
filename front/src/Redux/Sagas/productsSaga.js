import { call,put } from 'redux-saga/effects';

import { getAllProducts } from '../Actions/productsAction'; 

function* getProducts(action) {

    var addedToCart = [];

    const URL = `http://localhost:8080/products/page/${action.offset}`;
    const response = yield call(fetch,URL);
    const data = yield call([response,'json']);

    yield put(getAllProducts(data));

    if(localStorage["addedToCart"]){

        addedToCart = JSON.parse(localStorage.getItem('addedToCart'));

        for(let i = 0; i < addedToCart.length; i++)
        {
            yield put({ type:'ADDED_TO_CART',payload:addedToCart[i]})
        }
        
        yield put({ type:'BUBBLE' });
    }
    
}

export { getProducts };