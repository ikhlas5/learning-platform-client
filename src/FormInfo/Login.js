import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../ContextProvider/AuthContext';

const Login = () => {

    const [error, setError] = useState(``);
    const {userSingIn,providerLogIn,providerGitHub} = useContext(AuthorContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';



    const  handdleSingIn = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)

        userSingIn(email,password)
        .then(resualt => {
            const user = resualt.user;
            form.reset()
            setError('');
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }   

    const googleSingIn =() => {
        providerLogIn(googleProvider )
        .then(res => {
            const user = res.user;
            navigate('/')
            // console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handdleGithub  = () => {
        providerGitHub(githubProvider)
        .then(res => {
            const user = res.user;
            navigate('/')
            // console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    

    return (
        <div  className='w-50 sm-w-75 mx-auto  '>
            <Form  onSubmit={handdleSingIn} className='mb-3 ps-5 pe-5 pt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'> {error}</p>
                <Button variant="success" type="submit">
                    Log in
                </Button>
            </Form>
          
            <p className='ps-5'>if You new please <Link to='/register'>Register Now</Link></p>
            
                <div className='d-flex justify-content-center align-items-between mt-4'>
                    <Button onClick={googleSingIn} variant="secondary">Log In With Google</Button>
                    <Button onClick={handdleGithub} className='ms-2' variant="dark">Log In With Github</Button>
                </div>
                

        </div>
    );
};

export default Login;