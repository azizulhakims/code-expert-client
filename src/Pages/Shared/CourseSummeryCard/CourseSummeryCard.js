import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummeryCard = ({ data }) => {
    const { _id, title, details, image_url } = data;
    return (
        <div className='p-4'>

            <Card className="text-center">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 200 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}> <Button>View Derails</Button></Link></>
                            :
                            <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
        </div>
    );
};

export default CourseSummeryCard;