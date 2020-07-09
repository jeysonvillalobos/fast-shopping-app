import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FaTrashAlt } from 'react-icons/fa';

class ProductCart extends Component {

    state = {
        selectTag:0,
        total:0
    };

    componentDidMount(){
        this.setState({
            total:this.props.price
        });
    }

    handleSelect(e){
        let total = this.props.price * e.target.value;

        this.setState({
            selectTag:e.target.value,
            total: total
        });
    
        this.props.UPDATE_CART({
            productId:this.props.id,
            price:total
        });

        this.props.TOTAL();
    }

    deleteItem(data){
        this.local_storage('cart',data);
        this.local_storage('addedToCart',data);
        this.props.DELETE_ITEM(data);
        this.props.TOTAL();
        this.props.BUBBLE();
    }
 
    local_storage(name,data){
        
        let storage = [];
        let newData = [];

        storage = JSON.parse(localStorage.getItem(name));
        if(name === "cart")
        {
            newData = storage.filter(item => item.id !== data);
        }
        else if(name === 'addedToCart')
        {
            newData = storage.filter(item => item !== data);
        }
        
        localStorage.setItem(name, JSON.stringify(newData));

    }



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
                            <FaTrashAlt 
                                style={{cursor:'pointer'}}
                                onClick={ this.deleteItem.bind(this,this.props.id) }
                            />
                        </div> 
                        <p className="Cart-smallLetter">{ this.props.category }</p>
                    </div>
                    <div className="Cart-unitPrice">
                        <p className="Cart-smallLetter">Unit Price</p>
                        <p className="Cart-price">${ this.props.price }</p>
                    </div>
                    <div className="Cart-qty">
                        <label htmlFor="sort-qty" className="Cart-smallLetter" >Qty:</label>
                        <select name="sort-qty" id="sort-qty" onChange={ this.handleSelect.bind(this) } value={ this.state.selectTag }>
                            { optionTag.map(data => data) }
                        </select>
                    </div>
                    <div className="Cart-totalPrice">
                        <p>${this.state.total}</p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    UPDATE_CART:data => dispatch({ type:'UPDATE_CART',payload:data }),
    DELETE_ITEM: data => dispatch({ type:'DELETE_ITEM',payload:data }),
    TOTAL: () => dispatch({ type:'TOTAL' }),
    BUBBLE: () => dispatch({ type:'BUBBLE' })
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductCart);