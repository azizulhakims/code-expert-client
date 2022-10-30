import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Category from '../Category/Category/Category';
import LeftSiteNav from '../Shared/LeftSideNav/LeftSiteNav';

const AllCourses = () => {
    return (
        <Container>
            <div className='d-none d-lg-block'>
                <Row>
                    <Col lg='2'>
                        <LeftSiteNav></LeftSiteNav>
                    </Col>
                    <Col lg='10'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
                {/* <LeftSideNav ></LeftSideNav> */}
            </div>
        </Container>
    );
};

export default AllCourses;

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