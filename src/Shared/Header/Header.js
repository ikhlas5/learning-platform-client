import React from 'react';
// import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Image, Container, } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { FaStamp } from "react-icons/fa";
import { AuthorContext } from '../../ContextProvider/AuthContext';
import { useContext } from 'react';
import { useState } from 'react';
import ReactTooltip from "react-tooltip";



const Header = () => {
    const { user, logOut } = useContext(AuthorContext);
    const [mode, setMode] = useState(false);


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.error(error))
    }

    //toggle button
    const handleToogle = () => {
        setMode(!mode)
    }


    return (
        <div style={{ marginBottom: '67px', width: '80%' }}>
            <Container>
                <Navbar collapseOnSelect expand="lg" fixed="top" bg="success" variant="dark" >
                    <Navbar.Brand className='ms-3' as={Link} to="/">OnlineEduCare</Navbar.Brand>
                    <Navbar.Toggle className='me-3' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className=' justify-content-end me-4'>
                        <Nav className='ms-3 me-3' activeKey={window.location.pathname} variant="pills">

                            <Nav.Item >
                                <Nav.Link as={Link} to="./courses" eventKey="/home" title="courses">
                                    Courses
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="./faq" title="faq">
                                    FAQ
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="./blog" eventKey="category" title="blog">
                                    Blog
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid || user?.photoURL ?
                                        <>
                                            {/* <span className='text-dark fw-bold mt-2 ms-3 me-3'>
                                                {user.displayName}
                                            </span> */}

                                            <Image

                                                data-tip data-for="registerTip"
                                                style={{ height: `48px`, color: 'white' }}
                                                roundedCircle
                                                src={user.photoURL}
                                            ></Image>
                                            <ReactTooltip id="registerTip" place="top" effect="solid">
                                                {user.displayName}
                                            </ReactTooltip>
                                            <Button variant="flush" onClick={handleLogout}>Log Out</Button>

                                        </>
                                        :
                                        <>
                                            <Button variant="flush">
                                                <Link to='/login'>Log In</Link>
                                            </Button>
                                            <Button variant="flush">
                                                <Link to='/regiester'>Regiester</Link>
                                            </Button>
                                        </>

                                }
                            </>
                            <>
                                <button className='bg-dark text-light ps-2 pe-2 roundedCircle' variant="success" onClick={handleToogle}>
                                    {mode ? 'dark' : 'light'}
                                </button></>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;