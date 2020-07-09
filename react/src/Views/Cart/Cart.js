import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Cart.css';
import './CartResponsive.css';


import Header from '../../Components/Header/Header';
import ProductCart from '../../Components/ProductCart';


class Cart extends Component {
    

    render(){

        return(
            <div className="Cart">
                <Header />

                <div className="Cart-main">
                    <div className="Cart-title">
                        <h3>Shopping Cart</h3>
                        <Link to='/checkout'><button className="button">Check Out</button></Link>
                    </div>

                    <div className="Cart-products">
                        {
                            this.props.cart.products.map(data => (
                                <ProductCart 
                                    key={ data.id }
                                    id = { data.id }
                                    name = { data.name }
                                    image = { data.image }
                                    price = { data.price }
                                    category = { data.category }
                                    quantity = { data.quantity }
                                />
                            ))
                        }
                        
                    </div>

                    <div className="Cart-footer">
                        <Link to='/home' >Continue Shopping</Link>
                        <p>Total: $440.43</p>
                    </div>
                    <div className="Cart-buttonCheck">
                        <Link to='/checkout'><button className="button">Check Out</button></Link>
                    </div>

                </div>


            </div>
        );
    }

}

const mapStateToProps = state => ({
    cart:state.cart
});

export default connect(mapStateToProps,null)(Cart);