import React, { Component } from 'react';


class Product extends Component {

    render(){
        return(
            <div className="Home-product">
                <div className="Home-img" style={{backgroundImage:`url('${this.props.image}')`}}></div>
                <div className="Home-description">
                    <div className="Home-descriptionItem">
                        <h4>{this.props.name}</h4>
                        <p className="Home-productCategory">{this.props.category}</p>
                        <p className="Home-productDescription">{this.props.description}</p>
                    </div>
                    <div className="Home-buy-price">
                        <button className="Button">Add to Cart</button>
                        <p className="Home-price">${this.props.price}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Product;