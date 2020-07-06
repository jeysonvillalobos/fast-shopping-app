import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { TiArrowLeftThick,TiArrowRightThick } from "react-icons/ti";

class HomePagination extends Component {



    getProducts(){
        this.props.getProducts();
        window.scrollTo(0, 0);
    }

    arrows(data){
        console.log('Cambiars');
    }

    render(){
        var box = [];

        var offset = this.props.paginationCurrent;

        for(let i = 0; i <= this.props.productsCount; i++)
        {
            if(offset === i)
            {
                box.push(<Link key={i} to ={`/home/${i}`}><div className="Home-box-pagination Home-box-current" onClick={this.getProducts.bind(this)}>{i}</div></Link>);
            }
            else {
                box.push(<Link key={i} to ={`/home/${i}`}><div className="Home-box-pagination" onClick={this.getProducts.bind(this)}>{i}</div></Link>);
            }
        }

        return(
            <div className="Home-pagination">
                
                <div className="Home-box-pagination" onClick={this.arrows.bind(this,0)}><TiArrowLeftThick /></div>
                { box.map(data => data) }
                <div className="Home-box-pagination" onClick={this.arrows.bind(this,1)}><TiArrowRightThick /></div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    paginationCurrent:state.paginationCurrent
});

const mapDispatchToProps = dispatch => ({
    PAGINATION_CURRENT: (data) => dispatch({type:'PAGINATION_OFFSET',payload:data})
});


export default connect(mapStateToProps,mapDispatchToProps)(HomePagination);