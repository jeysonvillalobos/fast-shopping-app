import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Cart.css';
import './CartResponsive.css';


import Header from '../../Components/Header/Header';
import ProductCart from '../../Components/ProductCart';


class Cart extends Component {

    render(){
        var checkoutButton;

        if(this.props.cart.products.length > 0 )
        {
            checkoutButton = <Link to='/checkout'><button className="button">Check Out</button></Link>; 
        }
        else{
            checkoutButton = "";
        }

        return(
            <div className="Cart">
                <Header />

                <div className="Cart-main">
                    <div className="Cart-title">
                        <h3>Shopping Cart</h3>
                       { checkoutButton }

                    </div>

                    <div className="Cart-products">
                        
                        {   
                            this.props.cart.products.length > 0 ?

                            this.props.cart.products.map(data => (
                                <ProductCart 
                                    key={ data.id }
                                    id = { data.id }
                                    name = { data.name }
                                    image = { data.image }
                                    price = { data.price }
                                    category = { data.category }
                                    quantity = { data.quantity }
                                    priceQty = { data.priceQty }
                                    localQTY = { data.localQTY }
                                />
                            ))
                            :
                            <h3 style={{textAlign:'center'}}>There are no products added to the cart</h3>
                        }
                        
                    </div>

                    <div className="Cart-footer">
                        <Link to='/home' >Continue Shopping</Link>
                        <p>Total: ${this.props.cart.total}</p>
                    </div>
                    <div className="Cart-buttonCheck">
                        { checkoutButton }
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    cart:state.cart
});

const mapdispatchToProps = dispatch => ({
    TOTAL: data => dispatch({ type:'TOTAL',payload:data }),
    BUBBLE: () => dispatch({ type:'BUBBLE' })
});

export default connect(mapStateToProps,mapdispatchToProps)(Cart);