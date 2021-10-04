import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/favicon.svg';

const Header = () => {
    return (
        <div className="row nav d-flex justify-content-evenly align-items-center">
            <div className="col-md-4">
                <Link to="/">
                    <img className="header-logo" src={logo} alt="" />
                </Link>
            </div>
            <div className="col-md-8">
                <Link className='nav-list' to='/home'>Home</Link>
                <Link className='nav-list' to='/services'>Services</Link>
                <Link className='nav-list' to='/about'>About</Link>
                <Link className='nav-list' to='/contact'>Contact</Link>
            </div>
        </div>

    );
};

export default Header;