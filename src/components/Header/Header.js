import React, { Component } from 'react';
import './Header.css';



class Header extends Component {
    render() {
        return (
            <div>
               
                <header className="header">
                <div className="container">
                    <div className="headerImage">
                        <img src="./images/nicholas_small.jpg" alt="" height="250px" width="310px"/>
                        
                    </div>
                    <div className="title">
                        <h2>Nicholas Heilman</h2> 
                        <h3>Project Portfolio</h3>
                    </div>
                </div>   
                </header>
            </div>
        );
    }
}

export default Header;