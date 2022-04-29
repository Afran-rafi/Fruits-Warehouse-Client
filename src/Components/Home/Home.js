import React from 'react';
import Carousel from '../Carousel/Carousel';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <div>
                <Inventory></Inventory>
            </div>
        </div>
    );
};

export default Home;