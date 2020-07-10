import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Routes from './Routes';
import Store from './Redux/Store';

const App = () => (
    <Provider store={ Store }>
        <Routes/>
    </Provider>
);

export default App;