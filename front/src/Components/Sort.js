import React, { Component } from 'react';
import { connect } from 'react-redux';


class Sort extends Component {

    handleSelect(data){
        if(data.target.value === 'Alpha Order'){
            this.props.ALPHA_ORDER();
        }

        if(data.target.value === 'Lowest Price'){
            this.props.LOWEST_PRICE();
        }

        if(data.target.value === 'Most Recent'){
            this.props.MOST_RECENT();
        }

    }

    render(){

        return(
            <div className="Home-sort">
                <label htmlFor="sort-products">Sort By:</label>
                <select name="sort-products" id="sort-products" onChange={ this.handleSelect.bind(this) } value={ this.props.products.sortBy }>
                    <option value="Alpha Order">Alpha Order</option>
                    <option value="Lowest Price">Lowest Price</option>
                    <option value="Most Recent">Most Recent</option>
                </select>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    products:state.products
});

const mapDispatchToProps = dispatch => ({
    ALPHA_ORDER: () => dispatch({ type:'ALPHA_ORDER' }),
    LOWEST_PRICE: () => dispatch({ type:'LOWEST_PRICE' }),
    MOST_RECENT: () => dispatch({ type:'MOST_RECENT' }),
});

export default connect(mapStateToProps,mapDispatchToProps)(Sort);