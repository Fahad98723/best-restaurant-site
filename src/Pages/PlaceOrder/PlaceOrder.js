import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import PlaceOrderItem from './PlaceOrderItem';

const PlaceOrder = () => {
    const {cart} = useAuth()
    console.log(cart);
    let subTotal = 0
    
    for(const item of cart){
        let total = item.quantity * item.price
        subTotal = subTotal + total
    }
    let tax = subTotal *(20/100)
    let deliveryfee = 10
    let total = parseFloat(subTotal.toFixed(2)) + parseFloat(tax.toFixed(2)) + parseFloat(deliveryfee.toFixed(2))
    return (
        <Container>
            <Row className= 'py-5'>
                <Col lg='8'>
                    <input type="text" className = 'mb-3 p-1 border-1 rounded w-50 bg-light' name="name" placeholder='Name' id="" />
                    <br />
                    <input className = 'mb-3 p-1 border-1 w-50 rounded bg-light' type="text" name="adress" placeholder='Adreess' id="" />
                    <br />
                    <input className = 'mb-3 p-1 border-1 w-50 rounded bg-light' type="text" name="adress" placeholder='Flat, suit, float' id="" />
                    <br />
                    <input className = 'mb-3 p-1 border-1 w-50 rounded bg-light' type="text" name="instructor" placeholder='Add Delivery Instructor' id="" />
                    <br />
                    <input className='btn btn-danger' type="submit" value="Save" />
                </Col>
                <Col lg='4'>
                    <h6>From <strong>Triangle Reastaurant GPR</strong></h6>
                    <h6>Arriving in 20-30 minutes</h6>
                    <h6>107 Road No 8</h6>
                    {
                        cart.map(item => <PlaceOrderItem key = {item.id} 
                        item = {item}
                        ></PlaceOrderItem>)
                    }
                    <div className="priceDettails my-4">
                        <h5>SubTotal : ${subTotal} </h5>
                        <h5>Tax : ${tax.toFixed(2)} </h5>
                        <h5>Delivery Fee : ${deliveryfee} </h5>
                        <h5>Total : ${total.toFixed(2)}</h5>
                        <button className="btn btn-danger">Place Order</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;