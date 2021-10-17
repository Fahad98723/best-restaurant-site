import React from 'react';
import './PlaceOrderItem.css'
const PlaceOrderItem = ({item}) => {
    const {name, img, price,quantity} = item
    return (
       <div className="placeOrderItem d-flex align-items-center py-1 my-2 bg-light">
            <img className= 'img-fluid' src={img} alt="" />
          <div className='ms-3'>
            <h5>{name}</h5>
            <h5>Price : ${price}</h5>
            <h6>Quantity : {quantity}</h6>
          </div>
       </div>
    );
};

export default PlaceOrderItem;