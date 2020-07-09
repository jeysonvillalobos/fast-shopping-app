import React, { Component } from 'react';

import { FaTrashAlt } from 'react-icons/fa';

class ProductCart extends Component {

    render(){
        let optionTag = [];
        let quantity = this.props.quantity;

        for(let i = 1; i <= quantity; i++)
        {
            optionTag.push(<option key={i} value={i}>{i}</option>);
        }

        return(
            <div className="Cart-product">
                <div className="Cart-img" style={{backgroundImage:`url('${ this.props.image }')`}}></div>
                <div className="Cart-product-container">
                    <div className="Cart-description">
                        <div className="Cart-description-title">
                            <h4>{ this.props.name }</h4>
                            <FaTrashAlt />
                        </div> 
                        <p className="Cart-smallLetter">{ this.props.category }</p>
                    </div>
                    <div className="Cart-unitPrice">
                        <p className="Cart-smallLetter">Unit Price</p>
                        <p className="Cart-price">${ this.props.price }</p>
                    </div>
                    <div className="Cart-qty">
                        <label htmlFor="sort-qty" className="Cart-smallLetter" >Qty:</label>
                        <select name="sort-qty" id="sort-qty">
                            { optionTag.map(data => data) }
                        </select>
                    </div>
                    <div className="Cart-totalPrice">
                        <p>$101.50</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductCart;