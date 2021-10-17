import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-section'>
            <div>
              <h1>Best Food Waiting For Your Belly</h1>
              <InputGroup className="mb-3 w-75 mx-auto mt-3">
                <FormControl
                placeholder="Search Food Items"
                aria-label="Search Food Items"
                aria-describedby="basic-addon2"
                className='border-0 search-input'
                />
                <Button className = 'search-btn' variant="outline-danger" id="button-addon2">
                Search
                </Button>
                </InputGroup>
            </div>  
        </div>
    );
};

export default Banner;