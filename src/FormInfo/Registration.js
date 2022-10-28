import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../ContexProvider/AuthContext';



const Registration = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()


    //from data
    const handleRegistration = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURl =form.photoURl.value;
        const email = form.email.value;
        const password = form.password.value;
      
        //create user account 
        createUser(email,password)
        .then(resualt => {
            const user = resualt.user;
            console.log(user)
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    }
    
    return (
        <div className='mt-5 w-50 mx-auto mb-5'>
            <h1 className='text-center fw-bold'>Registration </h1>
            <Form onSubmit={handleRegistration} className='mb-5 ps-5 pe-5 pt-5' >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3"
                    controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURl" type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email"  required/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>

                <Button variant="success" type="submit">
                    Regiester
                </Button>
            </Form>
            <p className='ps-5'>All ready regiester<Link to='/login'> Log in</Link></p>


        </div>
    );
};

export default Registration;