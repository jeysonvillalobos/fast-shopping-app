import React, { Component } from 'react';
import './Header.css';
import { TiShoppingCart } from "react-icons/ti";
import { FaShippingFast } from "react-icons/fa";

class Header extends Component {

    render(){
        return(
            <header className="Header">
                <div className="Header-container">
                     <div className="Header-logo">
                        <FaShippingFast size={30}/>
                        <h2 className="Header-title">Fast Shopping</h2>
                     </div>
                    
                    <div className='Header-cart'>
                        <TiShoppingCart className="carro" size={32} style={{position:'absolute',cursor:'pointer'}}/>
                        <div className="Header-cart-items-num">
                            <p>2</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;