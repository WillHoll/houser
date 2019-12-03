import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header-div'>
                    <div className='img'/>
                    <h3>Houser</h3>
                </div>
            </div>
        );
    }
}

export default Header;