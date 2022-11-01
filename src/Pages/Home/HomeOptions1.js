import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import homeImage from '../../assets/brands/homePage-1.jpg'


const HomeOptions1 = () => {
    return (
        <div className='d-flex bg-black'>
            <div className='p-5 m-5 '>
                <Card className="text-Left border-none">

                    <Card.Body>
                        <Card.Title>Learn without limits</Card.Title>
                        <Card.Text>
                            Start, switch, or advance your career with programing courses, Professional Certificates, and degrees from world-class universities and companies.
                        </Card.Text>
                        <Link to={'/courses'}><Button variant="primary">Join for free</Button></Link>
                        <Link className='m-2' to={'/premium'}><Button variant="secondary">Try for paid</Button></Link>
                    </Card.Body>

                </Card>
            </div>
            <div className='p-5'>
                <img src={homeImage} alt="" style={{ display: 'inline-block', height: 400, objectFit: 'cover' }} />
            </div>
        </div>
    );
};

export default HomeOptions1;