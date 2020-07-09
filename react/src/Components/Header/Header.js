import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';


import { TiShoppingCart } from "react-icons/ti";
import { FaShippingFast } from "react-icons/fa";

class Header extends Component {

    componentDidMount(){
        var product = {};
        if(this.props.cart.products.length === 0)
        {

            if(localStorage['cart'])
            {
                let data = JSON.parse(localStorage.getItem('cart'));
                for(let item of data)
                {
                    product = {
                        id:item.id,
                        name:item.name,
                        category:item.category,
                        image:item.image,
                        price:item.price,
                        quantity:item.quantity
                    };
            
                    this.props.ADD_CART(product);
                }
            }
            
        }

    }


    render(){
        return(
            <header className="Header">
                <div className="Header-container">
                     <div className="Header-logo">
                         <Link to='/'>
                            <FaShippingFast size={30}/>
                            <h2 className="Header-title">Fast Shopping</h2>
                        </Link>
                     </div>
                    
                    <div className='Header-cart'>
                        <Link to='/cart'>
                            <TiShoppingCart className="carro" size={32} style={{position:'absolute',cursor:'pointer'}}/>
                            <div className="Header-cart-items-num">
                                <p>{ this.props.cart.bubble }</p>
                            </div>
                        </ Link>
                    </div>
                </div>
            </header>
        );
    }

}

const mapStateToProps = state => ({
    cart:state.cart
});

const mapDispatchToProps = dispatch => ({
    ADD_CART: data => dispatch({ type:'ADD_CART', payload:data }),
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);