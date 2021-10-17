import React from 'react';
import { Carousel } from 'react-bootstrap';

const DetailsCarousel = ({item}) => {
    // console.log(item);
    return (
        <div>

            <Carousel>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={item.img}
            alt="First slide"
            />
            </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default DetailsCarousel;