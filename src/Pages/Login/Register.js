
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const [error, setError] = useState('');

    const [accepted, setAccepted] = useState('false');

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address before login')


            })

            .catch(e => {
                console.error(e);
                setError(e.message)

            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)

            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className='container col-md-5 mx-auto m-4 bg-warning p-4 rounded'>
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
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to={'/terms'}>Accept Terms and conditions</Link></>} />
                </Form.Group>
                <div>
                    <Button variant="primary" type="submit" disabled={!accepted}>
                        Register
                    </Button>
                    <Link className='m-4' to={'/login'}><Button variant="primary">Login</Button> </Link>
                </div>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>



            </Form>
        </div>
    );
};

export default Register;