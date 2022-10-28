import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCart from '../CourseDetails/SingleCart';

const Courses = () => {
     
    const [navItem, setNavItem] = useState([])
    const [courseInfo, setCourseInfo] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/course`)
            .then(res => res.json())
            .then(data => setCourseInfo(data))
    }, [])
 
    //nav item  
    useEffect(() => {
        fetch(`http://localhost:5000/coursecategories`)
            .then(res => res.json())
            .then(data => setNavItem(data))
    }, [])

    return (
        <div className='d-grid w-75 mx-auto  '>
            <Row>
                <Col sm={4} className='mt-5 '>
                    
                    {
                        navItem.map(item => <p
                            key={item.id}>
                            <button className='w-100 p-2 fw-bold'>
                                <Link to={`/courseDetails/${item.id}`}>
                                    {item.name}
                                </Link>
                            </button>

                        </p>)
                    }
                </Col>
                <Col sm={8}>
                
                    {
                        courseInfo.map(course =>
                            <SingleCart
                                key={course.id}
                                course={course}
                            ></SingleCart>

                        )
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Courses;