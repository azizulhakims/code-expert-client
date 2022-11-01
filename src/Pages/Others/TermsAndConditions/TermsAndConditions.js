import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

const TermsAndConditions = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Terms & Conditions #1</Accordion.Header>
                    <Accordion.Body>
                        We are code expert we store your email, phone number for marketing propose, we can send promotional email.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Terms & Conditions #2</Accordion.Header>
                    <Accordion.Body>
                        you buy our course in online so you can pay by mobile and physicals come in our office to pay our payment.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <p>Back to Registration Page: <Link to={'/register'}>Register</Link></p>

        </div>
    );
};

export default TermsAndConditions;