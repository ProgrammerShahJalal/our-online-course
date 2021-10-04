import React from 'react';
import './NotFound.css';
import notFoundGif from '../../images/404.gif';
import notFoundImg from '../../images/notfound.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (<div>
        <div className='d-flex justify-content-center align-items-start'>
            <div className="col-md-6">
                <img className='image' src={notFoundGif} alt="" />
            </div>
            <div className="col-md-6">
                <img className='image' src={notFoundImg} alt="" />
            </div>
        </div>
        <div className="back-to-home">
            <h1 className='title'>Page Not Found!</h1>
            <p>Please try searching for some other page.</p>
            <Link to="/">
                <button className='back-btn'>Back to Home</button>
            </Link>
        </div>
    </div>
    );
};

export default NotFound;