import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';
import './HomeResponsive.css';

//Components
import Header from '../../Components/Header/Header';
import Sort from '../../Components/Sort';
import Product from '../../Components/Product';
import HomePagination from '../../Components/HomePagination';

class Home extends Component {

    state = { offset:0 };

    componentDidMount(){
        this.props.LOADING();
        this.getProducts();
        this.props.PAGINATION();

    }

    componentDidUpdate(prevProps , prevState){
        if(prevProps.match.params.offset !== prevState.offset){
            this.getProducts();
            this.setState({ offset:this.props.match.params.offset });
        }
    }

    getProducts(){
        if(this.props.match.params.offset !== undefined)
        {
            this.props.GET_PRODUCTS(this.props.match.params.offset + 0);   
            this.props.PAGINATION_CURRENT(Number(this.props.match.params.offset));
        }
        else{
            this.props.GET_PRODUCTS(0);
            this.props.PAGINATION_CURRENT(0);
        }
    }

    render(){
        return(
            <div className='Home'>
                <Header />
                    <div className="Home-main">
                        <Sort />
                        <div className="Home-products">
                        {
                            this.props.products.loading ? 
                                <div className="Spinner"></div>
                            :
                                this.props.products.products.map(data => (
                                    <Product 
                                            key = {data.idProduct} 
                                            id  = {data.idProduct}
                                            name = {data.name}
                                            price = {data.price}
                                            quantity = {data.quantity}
                                            image = {data.image}
                                            description = {data.description}
                                            publication_date = {data.publication_date}
                                            category = {data.category}
                                            addedToCart = {data.addedToCart}
                                        />
                                ))
                        }
                        </div>
                        {
                            !this.props.products.loading ?
                                <HomePagination 
                                    getProducts = { this.getProducts.bind(this) }
                                    productsCount = { Math.floor(this.props.paginationBoxes / 10) } 
                                    pageCurrent = { Number(this.props.match.params.offset) }
                                />
                            :
                            null
                        }
                    </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products:state.products,
    paginationBoxes:state.paginationBoxes,
    paginationCurrent:state.paginationCurrent
});

const mapDispatchToProps = dispatch => ({
    GET_PRODUCTS: (data) => dispatch({type:'GET_PRODUCT_SUCCESS',offset:data}),
    PAGINATION: () => dispatch({type:'GET_BOXES'}),
    PAGINATION_CURRENT: (data) => dispatch({type:'PAGINATION_OFFSET',payload:data}),
    LOADING: () => dispatch({ type:'LOADING' })
});


export default connect(mapStateToProps,mapDispatchToProps)(Home);