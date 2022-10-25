import React from 'react';
import { Col, Container, DropdownButton, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaGoogle, FaYoutube } from 'react-icons/fa';
import { FiFacebook, FiLogIn, FiTwitter } from 'react-icons/fi';
import { RiWhatsappFill } from 'react-icons/ri';


const Footer = () => {
    return (
        <div className="bg-dark text-white p-4">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className=''>
                            <h4>You can also login</h4>
                            <ButtonGroup vertical>
                                <Button variant='outline-success' className='m-1'><FiLogIn></FiLogIn> Email Login</Button>
                                <Button variant='outline-primary' className='m-1'> <FaGoogle></FaGoogle> Google Login</Button>
                                <Button variant='outline-warning' className='m-1'> <FaGithub></FaGithub> GitHub Login</Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <h4>Our Course</h4>
                    </Col>

                    <Col lg='3'>
                        <h4>Company</h4>
                        <p><Link to={'aboutUs'}>About Us</Link></p>
                        <p><Link to={'privacyPolicy'}>Privacy policy</Link></p>
                        <p><Link to={'tramsAndCondition'}>Trams and condition</Link></p>

                    </Col>

                    <Col lg='3'>
                        <h4>Information</h4>
                        <p>Call: 01921237765</p>
                        <p>Email: it.azizulhakim@gmail.com</p>
                        <p>Find Us</p>
                        <ButtonGroup aria-label="Basic example" className='m-2'>
                            <Button variant="secondary"><FiFacebook></FiFacebook></Button>
                            <Button variant="secondary"><FiTwitter></FiTwitter></Button>
                            <Button variant="secondary"><RiWhatsappFill></RiWhatsappFill></Button>
                            <Button variant="secondary"><FaDiscord></FaDiscord></Button>
                            <Button variant="secondary"><FaYoutube></FaYoutube></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;