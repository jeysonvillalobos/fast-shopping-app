import React, { Component } from 'react';

class Sort extends Component {

    render(){
        return(
            <div className="Home-sort">
                <label htmlFor="sort-products">Sort By:</label>
                <select name="sort-products" id="sort-products">
                    <option value="Alpha Order">Alpha Order</option>
                    <option value="Lowest Price">Lowest Price</option>
                    <option value="Most Recent">Most Recent</option>
                </select>
            </div>
        );
    }

}

export default Sort;