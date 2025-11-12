import React from 'react';
import Slider from '../carousel/Slider';
import LatestCars from '../latestCars/LatestCars';
import WhyRentWithUs from '../whyRentWithUs/WhyRentWithUs';
import ServiceSections from '../serviceSections/ServiceSections';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <LatestCars></LatestCars>
            <WhyRentWithUs></WhyRentWithUs>
            <ServiceSections></ServiceSections>
        </div>
    );
};

export default Home;