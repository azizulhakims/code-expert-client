import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';


const SinglePremium = () => {
    const course = useLoaderData()
    const { title, details, image_url, category_id, _id } = course;
    return (
        <Card className="item-center container p-4" >


            <Card.Img style={{ width: '50%' }} variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>Your Course ID : {_id}</Card.Title>
                <Card.Title>Please mail us with your Course ID we will provide your Premium Data</Card.Title>
                <div>Email Id: data@codeexpert.com</div>
                <br />
                <Card.Text>
                    {details}


                </Card.Text>
                <div>
                    <Link to={'/courses'}><Button variant="primary">All Course Page</Button></Link>
                </div>

            </Card.Body>
        </Card>
    );
};

export default SinglePremium;