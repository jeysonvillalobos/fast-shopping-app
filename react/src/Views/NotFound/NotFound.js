import React, { Component } from 'react';
import './NotFound.css';
import { RiEmotionSadLine } from 'react-icons/ri';


//Components
import Header from '../../Components/Header/Header';


class NotFound extends Component {

    render(){
        return(
            <div className="NotFound">
                <Header />
                <div className="NotFound-main">
                    <RiEmotionSadLine size={100}/>
                    <h1>404 Page not found</h1>
                </div> 
            </div>
        );
    }

}

export default NotFound;