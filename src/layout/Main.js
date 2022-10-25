import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';


const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;



{/* <div>
<Header />
<Container>
    <Row>
        <Col lg='2'>
            <LeftSiteNav></LeftSiteNav>
        </Col>
        <Col lg='10'>
            <Outlet></Outlet>
        </Col>
    </Row>
</Container>
<Footer />
</div> */}