import { call,put } from 'redux-saga/effects';

import { insertUser,searchUser } from '../Actions/usersAction'; 

function* insertUserDB(form) {

    const URL = `http://localhost:8080/users/insert/`;
    const headers = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.payload)
    }
    const response = yield call(fetch,URL,headers);
    const data = yield call([response,'json']);

    yield put(insertUser(data));

}

function* searchUserDB(action) {

    const URL = `http://localhost:8080/users/searchEmail`;
    const headers = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:action.payload})
    }
    const response = yield call(fetch,URL,headers);
    const data = yield call([response,'json']);

    if(data.length > 0)
    {
        yield put(searchUser({users:data,found:false}));
    }
    else{
        yield put(searchUser({users:data,found:true}));
    }
    
}

function* insertUserByEmail(action) {
  
    const URL = `http://localhost:8080/users/insertUserByEmail`;
    const headers = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:action.payload.email,products:action.payload.products})
    }
    yield call(fetch,URL,headers);

}


export { insertUserDB,searchUserDB,insertUserByEmail };