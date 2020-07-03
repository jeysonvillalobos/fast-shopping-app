import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

//Components
import Home from './Views/Home/Home';
import Cart from './Views/Cart/Cart';
import Checkout from './Views/Checkout/Checkout';
import Thanks from './Views/Thanks/Thanks';


const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component= { Home } />
            <Route path='/cart' component= { Cart } />
            <Route path='/checkout' component= { Checkout } />
            <Route path='/thanks' component= { Thanks } />
        </Switch>
    </BrowserRouter>
);

export default Routes;