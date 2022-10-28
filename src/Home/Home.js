import React from 'react';
import Lottie from "lottie-react";
import onlineClass from '../Animistion/online-class.json'
const Home = () => {
    return (
        <div>
            <div>
                <h1>Home</h1>
            </div>
            <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
            <Lottie animationData={onlineClass}></Lottie>
            </div>
        </div>
    );
};

export default Home;