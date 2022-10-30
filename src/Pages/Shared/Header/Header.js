import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import LeftSiteNav from '../LeftSideNav/LeftSiteNav';
import Logo from '../../../assets/Untitled-1.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className=''>
            <Container>
                <Link to={'/'} className='navbar-brand height="30"'> <img src={Logo} /></Link>
                <Link to={'/'} className='text-decoration-none text-white m-3'>Code-Expert</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link ><Link to={'/courses'} className='text-decoration-none text-white m-3'>Courses</Link></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Link className='text-decoration-none text-white m-3'>FAQ</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Link className='text-decoration-none text-white m-3'>Blog</Link>
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none text-white'>
                        <LeftSiteNav></LeftSiteNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;