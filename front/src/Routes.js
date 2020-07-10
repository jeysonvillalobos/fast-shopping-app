import React from 'react';
import { BrowserRouter,Switch,Route,Redirect  } from 'react-router-dom';

//Components
import Home from './Views/Home/Home';
import Cart from './Views/Cart/Cart';
import Checkout from './Views/Checkout/Checkout';
import Thanks from './Views/Thanks/Thanks';
import NotFound from './Views/NotFound/NotFound';


const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route path='/home/:offset?' component= { Home } />
            <Route path='/cart' exact component= { Cart } />
            <Route path='/checkout' component= { Checkout } />
            <Route path='/thanks' component= { Thanks } />
            <Route path='/' component= {() => (<Redirect to = "/home" />) } />
            <Route path='*' component = { NotFound } />
        </Switch>
    </BrowserRouter>
);

export default Routes;