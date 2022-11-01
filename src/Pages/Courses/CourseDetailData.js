import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactToPrint from 'react-to-print';

const CourseDetailData = () => {
    const course = useLoaderData();
    const ref = useRef()
    const { title, details, image_url, category_id } = course;
    return (
        <div className='p-4'>
            <Card className="item-center container p-4" >
                <div className='m-4'><ReactToPrint trigger={() => <Button>Click Here for Course Details in PDF</Button>} content={() => ref.current} /></div>
                {/* <div> <ReactToPrint><Button variant="primary p-2 m-2">Click Here for Course Details in PDF</Button></ReactToPrint></div> */}

                <div ref={ref} className='m-4 p-4' >
                    <Card.Img style={{ width: '50%' }} variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>

                    </Card.Body>
                </div>

            </Card>
            <div className='ml-4 p-4'>
                <span> <Link to={'/courses'}><Button variant="primary">All Course Page</Button></Link>  <Link to={`/premium/${course?._id}`}><Button variant="primary">Get Premium Access</Button></Link></span>
            </div>
        </div>
    );

};


export default CourseDetailData;