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
                    <Carousel.Caption className='bg-warning rounded'>
                        <h1 className='text-warming'>HTML</h1>
                        <p>HTML & CSS</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className=" h-30 w-100"
                        style={{ display: 'inline-block', height: 600, objectFit: 'cover' }}
                        src={Brand2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='bg-warning rounded' >
                        <h1>REACT</h1>
                        <p>REACT development</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" h-30 w-100"
                        style={{ display: 'inline-block', height: 600, objectFit: 'cover' }}
                        src={Brand3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='bg-warning rounded'>
                        <h1>Dot Net</h1>
                        <p>
                            Dot Net Development
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselHome;