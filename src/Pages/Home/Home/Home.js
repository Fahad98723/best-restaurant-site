import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Menu></Menu>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;