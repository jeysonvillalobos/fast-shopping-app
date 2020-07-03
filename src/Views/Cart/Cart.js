import React,{ Component } from 'react';
import './Cart.css';
import { FaTrashAlt } from 'react-icons/fa';

import Header from '../../Components/Header/Header';

class Cart extends Component {

    render(){
        return(
            <div className="Cart">
                <Header />

                <div className="Cart-main">
                    <div className="Cart-title">
                        <h3>Shopping Cart</h3>
                        <button>Check Out</button>
                    </div>

                    <div className="Cart-products">



                        <div className="Cart-product">
                            <div className="Cart-img"></div>
                            <div className="Cart-description">
                                <div className="Cart-description-title">
                                    <h4>Samsum Galaxy S4</h4>
                                    <FaTrashAlt />
                                </div> 
                                <p className="Cart-smallLetter">Product Category</p>
                            </div>
                            <div className="Cart-unitPrice">
                                <p className="Cart-smallLetter">Unit Price</p>
                                <p className="Cart-price">$101.50</p>
                            </div>
                            <div className="Cart-qty">
                                <label htmlFor="sort-qty" className="Cart-smallLetter" >Qty:</label>
                                <select name="sort-qty" id="sort-qty">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="Cart-totalPrice">
                                <p>$101.50</p>
                            </div>
                        </div>

                        <div className="Cart-product">
                            <div className="Cart-img"></div>
                            <div className="Cart-description">
                                <div className="Cart-description-title">
                                    <h4>Samsum Galaxy S4</h4>
                                    <FaTrashAlt />
                                </div> 
                                <p className="Cart-smallLetter">Product Category</p>
                            </div>
                            <div className="Cart-unitPrice">
                                <p className="Cart-smallLetter">Unit Price</p>
                                <p className="Cart-price">$101.50</p>
                            </div>
                            <div className="Cart-qty">
                                <label htmlFor="sort-qty" className="Cart-smallLetter" >Qty:</label>
                                <select name="sort-qty" id="sort-qty">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="Cart-totalPrice">
                                <p>$101.50</p>
                            </div>
                        </div>

                        <div className="Cart-product">
                            <div className="Cart-img"></div>
                            <div className="Cart-description">
                                <div className="Cart-description-title">
                                    <h4>Samsum Galaxy S4</h4>
                                    <FaTrashAlt />
                                </div> 
                                <p className="Cart-smallLetter">Product Category</p>
                            </div>
                            <div className="Cart-unitPrice">
                                <p className="Cart-smallLetter">Unit Price</p>
                                <p className="Cart-price">$101.50</p>
                            </div>
                            <div className="Cart-qty">
                                <label htmlFor="sort-qty" className="Cart-smallLetter" >Qty:</label>
                                <select name="sort-qty" id="sort-qty">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="Cart-totalPrice">
                                <p>$101.50</p>
                            </div>
                        </div>

                        <div className="Cart-product">
                            <div className="Cart-img"></div>
                            <div className="Cart-description">
                                <div className="Cart-description-title">
                                    <h4>Samsum Galaxy S4</h4>
                                    <FaTrashAlt />
                                </div> 
                                <p className="Cart-smallLetter">Product Category</p>
                            </div>
                            <div className="Cart-unitPrice">
                                <p className="Cart-smallLetter">Unit Price</p>
                                <p className="Cart-price">$101.50</p>
                            </div>
                            <div className="Cart-qty">
                                <label htmlFor="sort-qty" className="Cart-smallLetter" >Qty:</label>
                                <select name="sort-qty" id="sort-qty">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="Cart-totalPrice">
                                <p>$101.50</p>
                            </div>
                        </div>




                    </div>

                    <div className="Cart-footer">
                        <a href="localhost">Continue Shopping</a>
                        <p>Total: $440.43</p>
                    </div>
                    <div className="Cart-buttonCheck">
                        <button>Check Out</button>
                    </div>

                </div>


            </div>
        );
    }

}

export default Cart;