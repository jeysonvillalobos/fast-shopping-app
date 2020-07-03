import React, { Component } from 'react';
import './Header.css';
import { TiShoppingCart } from "react-icons/ti";

class Header extends Component {

    render(){
        return(
            <header className="Header">
                <div className="Header-container">
                    <h2>Fast Shopping</h2>
                    <div className='Header-cart'>
                        <TiShoppingCart size={32} style={{position:'absolute',cursor:'pointer'}}/>
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