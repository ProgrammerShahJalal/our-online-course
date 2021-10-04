import React from 'react';
import './Contact.css';
import location from '../../images/location.png';
import phone from '../../images/phone-call.png';
import email from '../../images/message.png';
import contactImg from '../../images/contact-us.gif';

const Contact = () => {
    return (
        <div>
            {/* contact us first section */}
            <h2 className='text-center fs-1 mt-5 mb-2 fw-bold'>Contant Us</h2>
            <div className="container text-center">
                <div className="row d-flex">
                    <div className="col-md-4">
                        <img className='contact-icon' src={location} alt="" />
                        <h3>Location</h3>
                        <p>744 New York Ave, Brooklyn, <br /> Kings,
                            New York 10224</p>
                    </div>
                    <div className="col-md-4">
                        <img className='contact-icon' src={phone} alt="" />
                        <h3>Phone</h3>
                        <p>(+642) 245 356 432 <br />
                            (+420) 336 476 328</p>
                    </div>
                    <div className="col-md-4">
                        <img className='contact-icon' src={email} alt="" />
                        <h3>Email</h3>
                        <p>bestonlineedu@support.com <br />
                            help@education.com</p>
                    </div>
                </div>
            </div>
            {/* contact us second section */}
            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <img className='image' src={contactImg} alt="" />
                    </div>
                    <div className="col-md-6 contact">
                        <h3>Let’s Connect</h3>
                        <p>Feel free to contact with us.</p>
                        <input type="text" placeholder="Your Full Name" />
                        <br />
                        <input type="email" name="email" placeholder="Your Email" /><br />
                        <input type="tel" name="teliphone" placeholder="Your Phone Number" /><br />
                        <textarea name="massege" id="" cols="50" rows="5" placeholder="type your massege"></textarea><br />
                        <p><input type="checkbox" name="" required /> I am agree with the term and condition of "Our Online Education"</p>
                        <button className='back-btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;