import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';




const Login = () => {

    const [error, setError] = useState('');

    const { ProviderLogin, signIn } = useContext(AuthContext);


    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/courses')
            })

            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const googleProvider = new GoogleAuthProvider()


    const handleGoogleSignIn = () => {
        ProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                console.log(handleGoogleSignIn)
            })
            .catch(error => console.error(error))



    }


    return (
        <div className='container col-md-5 mx-auto'>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <br></br>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <>Or</>
                <br />

            </Form>
            <ButtonGroup >

                <Button onClick={handleGoogleSignIn} variant='outline-primary' className='m-1'> <FaGoogle></FaGoogle> Google Login</Button>
                <Button variant='outline-warning' className='m-1'> <FaGithub></FaGithub> GitHub Login</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;