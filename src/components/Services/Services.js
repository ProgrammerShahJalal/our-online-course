import React from 'react';
import './Services.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import DisplayServices from '../DisplayServices/DisplayServices';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./course.JSON")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center fs-1 fw-bold mt-5 mb-2'>Our Services</h2>
            <Row xs={1} md={3} className="g-4 mb-5">
                {
                    services.map(service => <DisplayServices key={service.id} service={service}></DisplayServices>)
                }
            </Row>
        </div>
    );
};

export default Services;