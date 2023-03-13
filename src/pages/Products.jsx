import React from 'react';
import { Button, Card, Carousel, ListGroup } from 'react-bootstrap';
import first1 from '../../public/images/AMPLIACION SPA UÑAS/1.png'
import first2 from '../../public/images/AMPLIACION SPA UÑAS/1.png'
import first3 from '../../public/images/AMPLIACION SPA UÑAS/1.png'
import products from '../components/produtcs';



const Products = () => {

    console.log(products)

    return (
        <div className='products'>
            {products.map((data) => (
                <Card style={{ width: '20rem', padding: '.5rem' }}>
                    <Card.Img variant="top" src={data.image} style={{width: '100%', height: '320px'}} />
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                           {data.information}
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>
            ))}

        </div>
    );
};

export default Products;