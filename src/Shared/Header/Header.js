import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Image, Container, } from "react-bootstrap";
import { Link,  useNavigate } from 'react-router-dom';
import { HiMoon } from "react-icons/hi";
import { useContext } from 'react';
import { useState } from 'react';
import ReactTooltip from "react-tooltip";
import { AuthorContext } from '../../ContexProvider/AuthContext';
import { BsFillMoonFill } from "react-icons/bs";


const Header = ({children}) => {
    const { user, logOut } = useContext(AuthorContext);
    console.log(user);
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
                    <Navbar.Brand className='ms-3' as={Link} to="/">Programming King</Navbar.Brand>
                    <Navbar.Toggle className='me-3' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className=' justify-content-end me-4'>
                        <Nav className='ms-3 me-3' activeKey={window.location.pathname} variant="pills">
                        

                            <Nav.Item >
                                <Nav.Link as={Link} to="./home" eventKey="category" title="Home" >
                                   Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link as={Link} to="./courses" eventKey="category" title="courses" >
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
                                                <Link className='text-slate-400 hover:text-cyan-500' to='/login'>Log In</Link>
                                            </Button>
                                            <Button variant="flush">
                                                <Link className='text-slate-400 hover:text-cyan-500' to='/regiester'>Regiester</Link>
                                            </Button>
                                        </>

                                }
                            </>
                                 <>
                                <HiMoon className='h-10' onClick={handleToogle}>{mode ? 'dark' : 'light'}</HiMoon>
                                </>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;