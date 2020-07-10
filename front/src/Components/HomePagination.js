import React, { Component } from 'react';
import { Link,withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';

import { TiArrowLeftThick,TiArrowRightThick } from "react-icons/ti";

class HomePagination extends Component {

    getProducts(){
        this.props.getProducts();
        this.props.ALPHA_ORDER();
        window.scrollTo(0, 0);
    }

    arrows(data){
        let pageCurrent = this.props.pageCurrent;
        let totalBox = Math.floor(this.props.paginationBoxes / 10);
        
        if(pageCurrent)
        {
            if(data === 0)
            {
                if(pageCurrent !== 0)
                {
                    this.props.history.push(`/home/${ pageCurrent - 1}`);
                    this.getProducts();
                    window.scrollTo(0, 0);
                }
            }
            else if (data === 1){
                if(pageCurrent !== totalBox)
                {
                    this.props.history.push(`/home/${ pageCurrent + 1}`);
                    this.getProducts();
                    window.scrollTo(0, 0);
                }
            }
        }
        else{
            if(data === 1)
            {
                this.props.history.push(`/home/1`);
                this.getProducts();
                window.scrollTo(0, 0);
            }
        }

    }

    render(){
        var box = [];

        var offset = this.props.paginationCurrent;

        for(let i = 0; i < this.props.productsCount; i++)
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
    ALPHA_ORDER: () => dispatch({ type:'ALPHA_ORDER' }),
    PAGINATION_CURRENT: (data) => dispatch({type:'PAGINATION_OFFSET',payload:data})
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomePagination));