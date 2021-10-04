import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const DisplayService = (props) => {
    const { service } = props;
    const { name, crsImg, price, rating, rateMan, lesson, enroll } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={crsImg} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div className="row">
                            <div className="col-md-6">
                                <Rating className='star-rating'
                                    initialRating={rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly></Rating>
                            </div>
                            <div className="col-md-6">
                                {rating}({rateMan} Reviews)
                            </div>
                        </div>
                        <h3>${price.current}</h3>
                        <h5 className='regular-price'>${price.regular}</h5>
                        <div className="row cart-footer">
                            <div className="col-md-6">
                                <p><i class="fas fa-book"></i> Lessons: {lesson}</p>
                            </div>
                            <div className="col-md-6">
                                <p><i class="fas fa-user-graduate"></i> Enrolled: {enroll}</p>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DisplayService;