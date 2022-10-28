import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SingleCart = ({course}) => {
 
    const { name, details,id,img } = course;
 
    return (
        <div className='mx-auto '>
               <Card className='mt-5'  >
                <Card.Img style={{width: "100%",height: "400px"}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                         {details.length > 100 ? details.slice(0,150) +'...' : details}
                    </Card.Text>
                    <Button className='bg-dark' variant="primary">
                        <Link to={`/courseDetails/${id}`}>Read Details</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCart;