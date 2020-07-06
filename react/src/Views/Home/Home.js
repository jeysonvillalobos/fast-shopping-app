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

    state = {
        offset:0
    };

    componentDidMount(){
        this.getProducts();
        this.props.PAGINATION();
    }

    componentDidUpdate(){
        if(this.props.match.params.offset !== this.state.offset){
            this.getProducts();
            this.setState({ offset:this.props.match.params.offset });
        }
    }

    getProducts(){
        if(!this.props.match.params.offset)
        {
            this.props.GET_PRODUCTS(0);
            this.props.PAGINATION_CURRENT(0);
        }
        else{
            this.props.GET_PRODUCTS(this.props.match.params.offset + 0);   
            this.props.PAGINATION_CURRENT(Number(this.props.match.params.offset));
        }
    }

    render(){
        return(
            <div className='Home'>
                <Header />
                { this.props.HomeReducer.loading ? <h1 className="Home-empty">No hay productos para mostrar.</h1> :

                    <div className="Home-main">
                        <Sort />
                        <div className="Home-products">
                        {
                            this.props.HomeReducer.products.map(data => (
                                <Product 
                                        key = {data.idProduct} 
                                        id  = {data.idProduct}
                                        name = {data.name}
                                        price = {data.price}
                                        image = {data.image}
                                        description = {data.description}
                                        publication_date = {data.publication_date}
                                        category = {data.category}
                                    />
                            ))
                        }
                        </div>
                        <HomePagination 
                            getProducts = { this.getProducts.bind(this) }
                            productsCount = { Math.floor(this.props.paginationBoxes / 10) } 
                            offset = { this.state.offset }
                        />
                    </div>
                }

            </div>
        );
    }

}

const mapStateToProps = state => ({
    HomeReducer:state.HomeReducer,
    paginationBoxes:state.paginationBoxes,
    paginationCurrent:state.paginationCurrent
});

const mapDispatchToProps = dispatch => ({
    GET_PRODUCTS: (data) => dispatch({type:'GET_PRODUCT_SUCCESS',offset:data}),
    PAGINATION: () => dispatch({type:'GET_BOXES'}),
    PAGINATION_CURRENT: (data) => dispatch({type:'PAGINATION_OFFSET',payload:data})
});


export default connect(mapStateToProps,mapDispatchToProps)(Home);