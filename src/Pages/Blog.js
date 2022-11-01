import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Blog = () => {
    return (
        <Card className='container p-4'>
            <div className='m-2 bg-warning rounded'>
                <Card.Header className=''>what is cors</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Cross-Origin Resource Sharing (CORS) is a mechanism or a protocol that allows devices on one domain to access resources residing on other domains. Generally, for security reasons, browsers forbid requests that come in from cross-domain sources.
                    </Card.Text>

                </Card.Body>
            </div>
            <div className='m-2 bg-warning rounded'>
                <Card.Header className=''>Why are you using firebase?What other options do you have to implement authentication?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Firebase is a backend provided by Google for both application development and web development, which requires Internet(for placing data in firebase).The main advantage of using Firebase is no need of physical server, it gets replaced by Firebase. Limitation is there for free of cost, beyond limitation we have to pay for Google. Click this link for pricing details Firebase Pricing
                        In app development, developer can use Firebase as backend, data given by end-user in your application gets stored directly to Firebase and that stored data could be fetched for later use or further purpose.


                    </Card.Text>



                </Card.Body>
            </div>
            <div className='m-2 bg-warning rounded'>
                <Card.Header className=''>How does the private route work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).

                    </Card.Text>



                </Card.Body>
            </div>
            <div className='m-2 bg-warning rounded'>
                <Card.Header className=''>What is Node? How does Node work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Learn about Node.js, a JavaScript runtime for building server-side or desktop applications.
                        Scalability, latency, and throughput are key performance indicators for web servers. Keeping the latency low and the throughput high while scaling up and out is not easy. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.


                    </Card.Text>



                </Card.Body>
            </div>
            <Link to={'/'}><Button variant="primary">Back to Home page</Button></Link>
        </Card>
    );
};

export default Blog;