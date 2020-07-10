import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Thanks.css';
import './ThanksResponsive.css';
import { GrStatusGood } from 'react-icons/gr';

//Components
import Header from '../../Components/Header/Header';


class Thanks extends Component {

    componentDidMount(){
        this.props.STATUS_FALSE();
        this.props.CLEAR_ALL();
        localStorage.removeItem('addedToCart');
        localStorage.removeItem('cart');
    }

    redirect(){ 
        this.props.history.push('/home');
    }

    render(){
        return(
            <div className="Thanks">
                <Header />

                <div className="Thanks-main">
                    <GrStatusGood size={50} />
                    <h2>Thanks for your purchase</h2>
                    <p className="Thanks-p">John, we have created your order #YGBJ23AC. Your items will be soon at your door.</p>
                    <h3>Stay safe</h3>
                    <button className="Button" onClick={ this.redirect.bind(this) }>Start Again</button>
                </div>


            </div>
        );
    }

}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    STATUS_FALSE:() => dispatch({ type:'STATUS_FALSE' }),
    CLEAR_ALL: () => dispatch({ type:'CLEAR_ALL' })
});


export default connect(mapStateToProps,mapDispatchToProps)(Thanks);