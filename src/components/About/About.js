import React from 'react';
import './About.css';
import acivment from '../../images/acivment.svg';
import proud from '../../images/proud.svg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2 className='text-center fs-1 fw-bold mt-5 mb-2'>About Us</h2>
            <div className="container">

                {/* about us first section */}
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <img className='image' src={acivment} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className='about-title'>Achieve Your
                            Goals<br /> With Us.</h2>
                        <p className='w-75 text-justify'>Don't memorise, learn with fun. It will be long lasting and evergreen. Learning anything requires commitment and the ability to push through the uncomfortable feeling of not being very good until reaching competency. </p>
                        <Link to="/services">
                            <button className='back-btn'>View Courses</button>
                        </Link>
                    </div>
                </div>

                {/* about us second section */}
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h2 className='about-title'>Do You Have
                            <br /> Questions ?</h2>
                        <p className='w-75 text-justify'>Well! Feel free to ask any quaries. We are here for you. We'll help you to grow your career and growth.</p>
                        <Link to="/contact">
                            <button className='back-btn'>Contact Us</button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <img className='image' src={proud} alt="" />
                    </div>
                </div>
            </div>

            {/* about us third section */}
            <div className="container text-center mt-5 mb-5">
                <h2 className='fs-1 fw-bold'>We Are Proud</h2>
                <p className='text-justify'>United We Stand, Divided We Fall. You don't have to struggle alone, <br />you've got our assistance and help.</p>
                <div className="row mt-5">
                    <div className="col-md-3 counter-box-1 text-white">
                        <i class="fas fa-users about-icon"></i>
                        <h2 className="fw-bold">345,421</h2>
                        <p>Students Enrolled</p>
                    </div>
                    <div className="col-md-3 counter-box-2 text-white">
                        <i class="fas fa-graduation-cap about-icon"></i>
                        <h2 className="fw-bold">2,485</h2>
                        <p>Total Courses</p>
                    </div>
                    <div className="col-md-3 counter-box-3 text-white">
                        <i class="fas fa-award about-icon"></i>
                        <h2 className="fw-bold">24,085</h2>
                        <p>Online Learners</p>
                    </div>
                    <div className="col-md-3 counter-box-4 text-white">
                        <i class="fas fa-user-tie about-icon"></i>
                        <h2 className="fw-bold">202k+</h2>
                        <p>Total Followers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;