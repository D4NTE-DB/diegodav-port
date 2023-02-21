import React from 'react';
import { Card, Carousel, ListGroup } from 'react-bootstrap';
import first1 from '../../public/images/AMPLIACION SPA UÑAS/1.png'
import first2 from '../../public/images/AMPLIACION SPA UÑAS/1.png'
import first3 from '../../public/images/AMPLIACION SPA UÑAS/1.png'
import IMG from '../components/images';



const Products = () => {

    console.log(IMG.SPA)

    return (
        <div className='products'>
            {IMG.map((data) => (
                <Card style={{ width: '20rem' }} key={data.id}>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={data.image1}
                                alt="first1 slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>first1 slide label</h3> */}
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={data.image2}
                                alt="first1 slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>first1 slide label</h3> */}
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={data.image3}
                                alt="first1 slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>first1 slide label</h3> */}
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={data.image4}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Second slide label</h3> */}
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={data.image5}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3> */}
                                {/* <p> */}
                                {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
                                {/* </p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                           {data.info}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Materiales</ListGroup.Item>
                        <ListGroup.Item>Acabados</ListGroup.Item>
                        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                    </ListGroup>

                </Card>
            ))}

        </div>
    );
};

export default Products;