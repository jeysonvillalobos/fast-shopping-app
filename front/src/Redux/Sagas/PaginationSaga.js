import { call,put } from 'redux-saga/effects';

import { countBoxes } from '../Actions/PaginationAction'; 

function* countBox() {

    const URL = `http://localhost:8080/products/pagination`;
    const response = yield call(fetch,URL);
    const data = yield call([response,'json']);

    yield put(countBoxes(data[0].boxes));
}

export { countBox };