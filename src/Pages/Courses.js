import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SingleCart from '../CourseDetails/SingleCart';


const Courses = () => {
     
    const [navItem, setNavItem] = useState([])
    const [courseInfo, setCourseInfo] = useState([])

    useEffect(() => {
        fetch(`https://b610-lerning-platform-server-side-ikhlas5.vercel.app/course`)
            .then(res => res.json())
            .then(data => setCourseInfo(data))
    }, [])
 
    //nav item  
    useEffect(() => {
        fetch(`https://b610-lerning-platform-server-side-ikhlas5.vercel.app/courseCatagories`)
            .then(res => res.json())
            .then(data => setNavItem(data))
    }, [])

    return (
        <div className=' w-75 mx-auto  '>
            <Row className='grid md:grid-cols-2'>
                <Col sm={4} className='mt-5'>
                    
                    {
                        navItem.map(item => <p
                            key={item.id}>
                            <button className='w-100 bg-slate-400 shadow-xl  p-2 fw-bold'>
                                <Link className='text-orange-700' to={`/courseDetails/${item.id}`}>
                                    {item.course}
                                </Link>
                            </button>

                        </p>)
                    }
                    
                </Col>
                <Col sm={8} className='grid md:grid-cols-2 gap-4'>
                
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