import React from 'react';
import { Card, Carousel, ListGroup } from 'react-bootstrap';
import first1 from '../assets/AMPLIACION SPA UÑAS/1.png'
import first2 from '../assets/AMPLIACION SPA UÑAS/2.png'
import first3 from '../assets/AMPLIACION SPA UÑAS/2.png'

const Products = () => {
    return (
        <Card style={{ width: '20rem' }}>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={first1}
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
                        src={first2}
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
                        src={first3}
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
                <Card.Title>Diseño 1</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Materiales</ListGroup.Item>
                <ListGroup.Item>Acabados</ListGroup.Item>
                {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Products;