import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();

            })

            .catch(e => {
                console.error(e);
                setError(e.message)

            });
    }
    return (
        <div className='container col-md-5 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" />

                </Form.Group>
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
                    Register
                </Button>

            </Form>
        </div>
    );
};

export default Register;