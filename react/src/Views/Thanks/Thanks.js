import React, { Component } from 'react';
import './Thanks.css';
import './ThanksResponsive.css';
import { GrStatusGood } from 'react-icons/gr';

//Components
import Header from '../../Components/Header/Header';


class Thanks extends Component {

    render(){
        return(
            <div className="Thanks">
                <Header />

                <div className="Thanks-main">
                    <GrStatusGood size={50} />
                    <h2>Thanks for your purchase</h2>
                    <p className="Thanks-p">John, we have created your order #YGBJ23AC. Your items will be soon at your door.</p>
                    <h3>Stay safe</h3>
                    <button className="Button">Start Again</button>
                </div>


            </div>
        );
    }

}

export default Thanks;