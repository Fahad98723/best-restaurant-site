import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'
import './Footer.css'
const Footer = () => {
    return (  
        <div className="footer-section bg-dark p-5">
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src={logo}  alt="" />
                    </Col>
                    <Col lg-6>
                        <Row>
                        <Col lg='6' className='text-white'>                                               
                            <li>About Online Food</li>
                            <li>Read Out Blog</li>
                            <li>Sign Up To Deliver</li>
                            <li>dAdd Your Restaurant</li>
                        </Col>
                        <Col lg='6' className='text-white'>
                            <li>Get Help</li>
                            <li>Read Faq's</li>
                            <li>View All Cities</li>
                            <li>Restaurant Near Me</li>
                        </Col>
                        </Row>

                        <div className='mt-5'>
                        <Link className='text-white mx-5'>Privacy</Link>
                        <Link className='text-white mx-5'>Policy</Link>
                        <Link className='text-white mx-5'>Term Of Use</Link>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;