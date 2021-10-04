import React from 'react';
import './Footer.css';
import logo from '../../images/favicon.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="row d-flex justify-content-evenly  align-items-center footer">
                <div className="col-md-4">
                    <img id='logo' src={logo} alt="" />
                    <h3>Our Online Education<br /> for your Career</h3>
                    <p className='footer-paragraph'>
                        “Learning never exhausts the mind.” “For the things we have to learn before we can do them, we learn by doing them.” “Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” “The beautiful thing about learning is that nobody can take it away from you.”
                    </p>
                </div>
                <div className="col-md-4">
                    <h3>Important Link</h3>
                    <nav>
                        <ul>
                            <li>
                                <Link className='nav-item' to="/">Home</Link>
                            </li>
                            <li>
                                <Link className='nav-item' to="/about">About</Link>
                            </li>
                            <li>
                                <Link className='nav-item' to="/services">Services</Link>
                            </li>
                            <li>
                                <Link className='nav-item' to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-4">
                    <h3>Stay With Us</h3>
                    <input className='footer-input' type="text" placeholder="Your Email" />
                    <br />
                    <br />
                    <button type="button" class="btn btn-primary">Submit</button>
                    <br />
                    <br />
                    <p className='footer-paragraph'>Get the latest news and updates right at your inbox and keep learning.</p>
                </div>
            </div>
            <div className="last-footer">
                <p><small>© 2022 All Rights Reserved By Md Shah Jalal</small></p>
            </div>
        </div>
    );
};

export default Footer;