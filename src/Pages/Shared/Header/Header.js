import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import LeftSiteNav from '../LeftSideNav/LeftSiteNav';
import Logo from '../../../assets/Untitled-1.png'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Header = () => {
    const { user, back, setBack, logOut } = useContext(AuthContext)
    console.log(back)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg={back ? 'dark' : 'warning'} variant={back ? 'dark' : 'warning'} sticky="top" className=''>
            <Container>
                <Link to={'/'} className='navbar-brand height="30"'> <img src={Logo} alt='' /></Link>
                <Link to={'/'} className='text-decoration-none text-white m-3'>Code-Expert</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link ><Link to={'/courses'} className='text-decoration-none text-white m-3'>Courses</Link></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Link className='text-decoration-none text-white m-3'>FAQ</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Link to={'/blog'} className='text-decoration-none text-white m-3'>Blog</Link>
                        </Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>

                            <Button onClick={() => setBack(!back)}>{back ? <BsToggleOn></BsToggleOn> : <BsToggleOff></BsToggleOff>}</Button>

                            <Nav.Link >
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant="info" onClick={handleLogOut}>Logout</Button>
                                        </>
                                        :
                                        <>

                                            <Link to={'/login'}><Button variant="primary">Login</Button> </Link>

                                        </>
                                }

                            </Nav.Link>
                            <Link to={'/profile'}>
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }} roundedCircle
                                        src={user.photoURL}></Image>
                                    : <FaUser></FaUser>

                                }
                            </Link>
                        </Nav>



                    </Navbar.Collapse>


                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
};

export default Header;