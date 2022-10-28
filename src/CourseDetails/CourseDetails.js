import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDSetails = () => {
    const data = useLoaderData();
    const {title,image,name,description,admission,price,start,loaction,id,badge} =data;
 
     
    return (
        <div  style={{ width: '80%',margin: '0 auto' }}>
            <h2 className='mt-4 mb-5'>{title}</h2>
            <Card className='shadow-lg' style={{ width: '100%' }}>
                <Card.Img style={{ width: '100%',height: '300px' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{ name}</Card.Title>
                    <Card.Text>
                        { description}
                        <h6 className='mt-4'>Addmision Last Date {admission}</h6>
                        <h6>Course Fee : { price}</h6>
                        <h6>Course start :{ start}</h6>
                        <h6>Place :{ loaction}</h6>
                        <p>Badge:{badge}</p>
                    </Card.Text>
                    <Button className='bg-dark'variant="primary">
                        <Link to={`/checkout/${ id}`}>Premium</Link> 
                    </Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseDSetails;