import React from 'react';
import './Home.css';
import heroImg from '../../images/education.gif';
import { useState } from 'react';
import { useEffect } from 'react';
import DisplayServices from '../DisplayServices/DisplayServices';
import { Row } from 'react-bootstrap';
import laptop from '../../images/course-icon/laptop.png';
import analysis from '../../images/course-icon/analysis.png';
import lab from '../../images/course-icon/lab.png';
import monitoring from '../../images/course-icon/monitoring.png';
import project from '../../images/course-icon/project-management.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./course.JSON")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="row d-flex justify-content-evenly align-items-center">
                <div className="col-md-6">
                    <img className='image' src={heroImg} alt="" />
                </div>
                <div className="col-md-6">
                    <h1 className='hero-title'>Develop Your Skill<br /> And Be Strong.</h1>
                    <h4>Go hunt your dream and don't give up.</h4>
                    <p><span>Our Online Education</span> is your learning points. Learn with fun.</p>
                    <Link to="/services">
                        <button className='back-btn'>Visit Our Services</button>
                    </Link>
                </div>
            </div>
            <div className="container mt-5 mb-5 pt-5">
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-2 course-box">
                        <img className='w-50' src={laptop} alt="" />
                        <h5>Information and Technology</h5>
                    </div>
                    <div className="col-md-2 course-box">
                        <img className='w-50' src={monitoring} alt="" />
                        <h5>Modern Computer Science</h5>
                    </div>
                    <div className="col-md-2 course-box">
                        <img className='w-50' src={project} alt="" />
                        <h5>Social Science and Management</h5>
                    </div>
                    <div className="col-md-2 course-box">
                        <img className='w-50' src={analysis} alt="" />
                        <h5>Data Analysis and Statistics</h5>
                    </div>
                    <div className="col-md-2 course-box">
                        <img className='w-50' src={lab} alt="" />
                        <h5>Biology and Life Science</h5>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h2 className='text-center fw-bold fs-2 pt-5 mb-3'>Our Popular Courses</h2>
                <Row xs={1} md={3} className="g-4 mb-5">
                    {
                        services.slice(4).map(service => <DisplayServices service={service}></DisplayServices>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Home;