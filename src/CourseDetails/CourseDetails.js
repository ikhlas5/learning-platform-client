import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDSetails = () => {
    const data = useLoaderData();
    const {header,img,name,details,admisionlastdate,coursefee,coursestart,Place,id} =data;
 
     
    return (
        <div  style={{ width: '80%',margin: '0 auto' }}>
            <h2 className='mt-4 mb-5'>{header}</h2>
            <Card style={{ width: '100%' }}>
                <Card.Img style={{ width: '100%',height: '20rem' }} variant="top" src={ img} />
                <Card.Body>
                    <Card.Title>{ name}</Card.Title>
                    <Card.Text>
                        { details}
                        <h6 className='mt-4'>Addmision Last Date {admisionlastdate}</h6>
                        <h6>Course Fee : { coursefee}</h6>
                        <h6>Course start :{ coursestart}</h6>
                        <h6>Place :{ Place}</h6>
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