import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FaCheckCircle } from 'react-icons/fa';

class Product extends Component {


    handleButton(ID,NAME,CATEGORY,IMG,PRICE,QTY){
        const product = {
            id:ID,
            name:NAME,
            category:CATEGORY,
            image:IMG,
            price:PRICE,
            quantity:QTY
        };

        this.props.ADD_CART(product);
        this.props.ADDED_TO_CART(ID);
        this.props.BUBBLE();    

        this.local_storage("cart",product);
        this.local_storage("addedToCart",ID);

    }

    local_storage(name,data){
        
        let storage = [];

        if(localStorage[name])
        {
            storage = JSON.parse(localStorage.getItem(name));
            storage.push(data);
            localStorage.setItem(name, JSON.stringify(storage));
        }
        else{
            storage.push(data);
            localStorage.setItem(name, JSON.stringify(storage));
        }
    }


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

                        {
                            this.props.addedToCart ?
                                <div className="Button Button-added">
                                    <FaCheckCircle size={15} />
                                </div>
                            :
                                <button className="Button" 
                                    onClick={this.handleButton.bind(
                                        this,
                                        this.props.id,
                                        this.props.name,
                                        this.props.category,
                                        this.props.image,
                                        this.props.price,
                                        this.props.quantity
                                    )}
                                    >Add to Cart
                                </button>
                        }
                                    
                        <p className="Home-price">${this.props.price}</p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    cart:state.cart
});

const mapDispatchToProps = dispatch => ({
    ADD_CART: data => dispatch({ type:'ADD_CART', payload:data }),
    BUBBLE: () => dispatch({ type:'BUBBLE' }),
    ADDED_TO_CART:data => dispatch({ type:'ADDED_TO_CART', payload:data })
});

export default connect(mapStateToProps,mapDispatchToProps)(Product);