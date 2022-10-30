import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetailData = () => {
    const course = useLoaderData();
    const { title, details, image_url, category_id } = course;
    return (

        <Card className="item-center container p-4" >
            <div> <Button variant="primary p-2 m-2">Click Here for Course Details in PDF</Button></div>

            <Card.Img style={{ width: '50%' }} variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <div>
                    <span> <Link to={'/courses'}><Button variant="primary">All Course Page</Button></Link>  <Button variant="primary">Get Premium Access</Button></span>
                </div>
            </Card.Body>
        </Card>
    );

};


export default CourseDetailData;