import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../Images/Image/choosus (1).png'
import img2 from '../../../Images/Image/choosus (2).png'
import img3 from '../../../Images/Image/choosus (3).png'
import icon1 from '../../../Images/ICON/choose (1).png'
import icon2 from '../../../Images/ICON/choose (2).png'
import icon3 from '../../../Images/ICON/choose (3).png'
import { Link } from 'react-router-dom';
const ChooseUs = () => {
    return (
        <Container className='py-5'>
            <h1>Why you choose us</h1>
            <p className='w-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In veniam voluptatibus odit quidem, asperiores maxime nemo, accusamus suscipit eaque laborum quo eligendi exercitationem dolores</p>
            <div className="choose-details">
                <Row>
                    <Col>
                        <img className='img-fluid' src={img2} alt="" />
                        <Row className ='mt-3'>
                            <Col lg='2' className = 'text-center '>
                            <img src={icon1} alt="" />
                            </Col>
                            <Col lg='10'>
                            <h3>Fast Delivery</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quos.</p>
                            <Link>See More <i class="fas fa-angle-double-right"></i></Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img className='img-fluid' src={img1} alt="" />
                        <Row className ='mt-3'>
                            <Col lg='2' className = 'text-center '>
                            <img src={icon2} alt="" />
                            </Col>
                            <Col lg='10'>
                            <h3>Fast Delivery</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quos.</p>
                            <Link>See More <i class="fas fa-angle-double-right"></i></Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img className='img-fluid' src={img3} alt="" />
                        <Row className ='mt-3'>
                            <Col lg='2' className = 'text-center '>
                            <img src={icon3} alt="" />
                            </Col>
                            <Col lg='10'>
                            <h3>Fast Delivery</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quos.</p>
                            <Link>See More <i class="fas fa-angle-double-right"></i></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default ChooseUs;