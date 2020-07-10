import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import Reducers from './Reducers';
import Sagas from './Sagas';


const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
    Reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(Sagas);

export default Store;