import React, { Component } from 'react';
import './Home.css';
import './HomeResponsive.css';

import { TiArrowLeftThick,TiArrowRightThick } from "react-icons/ti";

//Components
import Header from '../../Components/Header/Header';


class Home extends Component {

    render(){
        return(
            <div className='Home'>
                <Header />
                <div className="Home-main">
                    <div className="Home-sort">
                        <label htmlFor="sort-products">Sort By:</label>
                        <select name="sort-products" id="sort-products">
                            <option value="Alpha Order">Alpha Order</option>
                            <option value="Lowest Price">Lowest Price</option>
                            <option value="Most Recent">Most Recent</option>
                        </select>
                    </div>

                    <div className="Home-products">

                    

                        <div className="Home-product">
                            <div className="Home-img"></div>
                            <div className="Home-description">
                                <div className="Home-descriptionItem">
                                    <h4>Samsung Galaxy</h4>
                                    <p className="Home-productCategory">Product Category</p>
                                    <p className="Home-productDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor ascalsdjbalsd lasjdc a lasdjkcnalsdkjcalskdjnlaskdc lkjasdcn</p>
                                </div>
                                <div className="Home-buy-price">
                                    <button className="Button">Add to Cart</button>
                                    <p className="Home-price">$542.99</p>
                                </div>
                            </div>
                        </div>


                        <div className="Home-product">
                            <div className="Home-img"></div>
                            <div className="Home-description">
                                <div className="Home-descriptionItem">
                                    <h4>Samsung Galaxy</h4>
                                    <p className="Home-productCategory">Product Category</p>
                                    <p className="Home-productDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor</p>
                                </div>
                                <div className="Home-buy-price">
                                    <button className="Button">Add to Cart</button>
                                    <p className="Home-price">$542.99</p>
                                </div>
                            </div>
                        </div>


                        <div className="Home-product">
                            <div className="Home-img"></div>
                            <div className="Home-description">
                                <div className="Home-descriptionItem">
                                    <h4>Samsung Galaxy</h4>
                                    <p className="Home-productCategory">Product Category</p>
                                    <p className="Home-productDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor</p>
                                </div>
                                <div className="Home-buy-price">
                                    <button className="Button">Add to Cart</button>
                                    <p className="Home-price">$542.99</p>
                                </div>
                            </div>
                        </div>


                        <div className="Home-product">
                            <div className="Home-img"></div>
                            <div className="Home-description">
                                <div className="Home-descriptionItem">
                                    <h4>Samsung Galaxy</h4>
                                    <p className="Home-productCategory">Product Category</p>
                                    <p className="Home-productDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor</p>
                                </div>
                                <div className="Home-buy-price">
                                    <button className="Button">Add to Cart</button>
                                    <p className="Home-price">$542.99</p>
                                </div>
                            </div>
                        </div>

                        <div className="Home-product">
                            <div className="Home-img"></div>
                            <div className="Home-description">
                                <div className="Home-descriptionItem">
                                    <h4>Samsung Galaxy</h4>
                                    <p className="Home-productCategory">Product Category</p>
                                    <p className="Home-productDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor</p>
                                </div>
                                <div className="Home-buy-price">
                                    <button className="Button">Add to Cart</button>
                                    <p className="Home-price">$542.99</p>
                                </div>
                            </div>
                        </div>


                        <div className="Home-product">
                            <div className="Home-img"></div>
                            <div className="Home-description">
                                <div className="Home-descriptionItem">
                                    <h4>Samsung Galaxy</h4>
                                    <p className="Home-productCategory">Product Category</p>
                                    <p className="Home-productDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor</p>
                                </div>
                                <div className="Home-buy-price">
                                    <button className="Button">Add to Cart</button>
                                    <p className="Home-price">$542.99</p>
                                </div>
                            </div>
                        </div>

                        <div className="Home-product">
                            <div className="Home-img"></div>
                            <div className="Home-description">
                                <div className="Home-descriptionItem">
                                    <h4>Samsung Galaxy</h4>
                                    <p className="Home-productCategory">Product Category</p>
                                    <p className="Home-productDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor</p>
                                </div>
                                <div className="Home-buy-price">
                                    <button className="Button">Add to Cart</button>
                                    <p className="Home-price">$542.99</p>
                                </div>
                            </div>
                        </div>


                        <div className="Home-product">
                            <div className="Home-img"></div>
                            <div className="Home-description">
                                <div className="Home-descriptionItem">
                                    <h4>Samsung Galaxy</h4>
                                    <p className="Home-productCategory">Product Category</p>
                                    <p className="Home-productDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor</p>
                                </div>
                                <div className="Home-buy-price">
                                    <button className="Button">Add to Cart</button>
                                    <p className="Home-price">$542.99</p>
                                </div>
                            </div>
                        </div>









                    </div>

                    <div className="Home-pagination">
                        <div className="Home-box-pagination"><TiArrowLeftThick /></div>
                        <div className="Home-box-pagination"><a href="localhost">1</a></div>
                        <div className="Home-box-pagination"><a href="localhost">2</a></div>
                        <div className="Home-box-pagination"><a href="localhost">3</a></div>
                        <div className="Home-box-pagination"><TiArrowRightThick /></div>
                    </div>

                </div>

            </div>
        );
    }

}

export default Home;