import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SingleCart = ({course}) => {
 
    const { name, description,id,image } = course;
 
    return (
        <div className='mx-auto  '>
               <Card className='mt-5 shadow-lg border-none '  >
                <Card.Img className='object-cover' style={{width: "100%",height: "200px"}} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                         {description.length > 100 ? description.slice(0,150) +'...' : description}
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