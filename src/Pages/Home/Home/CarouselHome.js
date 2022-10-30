import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/html.jpg'
import Brand2 from '../../../assets/brands/css.jpg'
import Brand3 from '../../../assets/brands/js.jpg'

const CarouselHome = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>

                    <img
                        className="h-30 w-100"
                        style={{ display: 'inline-block', height: 600, objectFit: 'cover' }}
                        src={Brand1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className=" h-30 w-100"
                        style={{ display: 'inline-block', height: 600, objectFit: 'cover' }}
                        src={Brand2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" h-30 w-100"
                        style={{ display: 'inline-block', height: 600, objectFit: 'cover' }}
                        src={Brand3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselHome;