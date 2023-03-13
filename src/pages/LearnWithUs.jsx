import React from 'react';
import { Button, Card } from 'react-bootstrap';

const LearnWithUs = () => {
    return (
        <div>
             <Card style={{ width: '18rem', padding: '1rem' }}>
      <Card.Img variant="top" src="images/iconos/deigodav-icos.jpeg" />
      <Card.Body>
        <Card.Title>Estas a un paso de empezar a aprender con nosotros</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Quiero recibir más información</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default LearnWithUs;