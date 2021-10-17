import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Lunchitem.css'

const Lunchitem = ({item}) => {
    const {img,name,price} = item
    const history = useHistory()

    const itemDetails = () => {
        history.push(`/details/${item.id}`)
    }
    return (
        <Col lg='4' onClick= {itemDetails}>
            <div className ='item my-3'>
                <img className = 'img-fluid' src={img} alt="" />
                <h4>{name}</h4>
                <h5>${price}</h5>
            </div>
        </Col>
    );
};

export default Lunchitem;