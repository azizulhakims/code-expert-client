import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import AuthProvider from '../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { logInWithEmail, createUserGoogle, createUserGithub } = useContext(AuthProvider)
    const handelSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log('login18', user);
                Swal.fire(
                    'Good job!',
                    'login success!',
                    'success'
                )
                form.reset()
                navigate(from, { replace: true });
            }).catch(error => {
                console.error('error', error)
                const massage = error.message
                Swal.fire({
                    title: 'Error!',
                    text: massage,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })

            })
    }
    const hadelGooleLogin = () => {
        createUserGoogle()
            .then(result => {
                const user = result.user;
                console.log('login27', user);
                Swal.fire(
                    'Good job!',
                    'login success!',
                    'success'
                )
                navigate(from, { replace: true });
            }).catch(error => {
                console.error('error', error);
                const massage = error.message
                Swal.fire({
                    title: 'Error!',
                    text: massage,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })

            })
    }
    const handelGitLogin = () => {
        createUserGithub()
            .then(result => {
                const user = result.user;
                console.log('login37', user)
                Swal.fire(
                    'Good job!',
                    'login success!',
                    'success'
                )
                navigate(from, { replace: true });
            }).catch(error => {
                console.error('error', error);
                const massage = error.message
                Swal.fire({
                    title: 'Error!',
                    text: massage,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }


    return (
        <div >
            {/* <Header /> */}
            <Container>
                <Form className="border w-75 mx-auto  rounded-3 shadow p-3 mt-3 rounded-lg" onSubmit={handelSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className="w-100" variant="primary" type="submit">
                        {/* <ArrowRightIcon className='text-light me-2' style={{ width: '30px', height: '30px' }} />   Login */}
                        Login
                    </Button>
                    <br />
                    <Button onClick={hadelGooleLogin}
                        className="mt-3 w-100" variant="danger"  >
                        <FaGoogle className='me-4' />   Login with google
                    </Button>
                    <br />
                    <Button onClick={handelGitLogin} className="mt-3 w-100" variant="dark">
                        <FaGithub className='me-4' />  Login with github
                    </Button>
                    <br />
                    <Link to='/signup'>Are You New ? <span className='text-danger'>register first</span> </Link>
                    <br />
                    <Link to='/resetpassword'>Forget password ? </Link>
                </Form>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Login;