import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { TiShoppingCart } from "react-icons/ti";
import { FaShippingFast } from "react-icons/fa";

class Header extends Component {

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
                                <p>3</p>
                            </div>
                        </ Link>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;