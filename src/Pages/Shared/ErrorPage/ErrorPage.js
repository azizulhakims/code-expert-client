import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='justify-content-center'>
                <h1 className='text-center mt-5 text-danger fw-bold fs-1'>404 page not found</h1>
                <Link to={'/'}> <Button className='justify-content-center'>Back To Home Page</Button></Link>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;