import React from 'react';
import { useLoaderData } from 'react-router-dom';
 
 const CheckOut = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2> Checkout Your Premium course</h2>
        </div>
    );
 };
 
 export default CheckOut;