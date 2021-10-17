import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const DinnerItem = ({item}) => {
    const {img,name,price} = item
    const history = useHistory()
    const itemsdetails = () => {
        history.push(`/details/${item.id}`)
    }
    return (
        <Col lg='4' onClick = {itemsdetails}>
            <div className ='item my-3'>
                <img className = 'img-fluid' src={img} alt="" />
                <h4>{name}</h4>
                <h5>${price}</h5>
            </div>
        </Col>
    );
};

export default DinnerItem;