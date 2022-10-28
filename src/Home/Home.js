import React from 'react';
import Lottie from "lottie-react";
import onlineClass from '../Animistion/online-class.json'
const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
                <h1>Explore Our Programs And Courses</h1>
            <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
            <Lottie animationData={onlineClass}></Lottie>
            </div>
        </div>
    );
};

export default Home;