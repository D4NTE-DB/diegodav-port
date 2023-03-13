import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {


  return (
    <div className='Home'>
      <Carousel as={Link} to='/products' variant='dark' className='home-access' interval='5000000'>
        <Carousel.Item>
          <img
            src="images/iconos/deigodav-icos.jpeg"
            alt=""
            style={{ width: '100%' }}
          />
          <Carousel.Caption>
            <h3 style={{color: 'black' }}>PRODUCTOS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>PRODUCTOS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>PRODUCTOS</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel  as={Link} to='/desings' variant='dark' className='home-access' interval='5000000'>
        <Carousel.Item>
          <img
            src="images/iconos/deigodav-icos.jpeg"
            alt=""
            style={{ width: '100%' }}
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>DISEÑOS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>DISEÑOS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>DISEÑOS</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel as={Link} to='/products' variant='dark' className='home-access' interval='5000000'>
        <Carousel.Item>
          <img
            src="images/iconos/deigodav-icos.jpeg"
            alt=""
            style={{ width: '100%' }}
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>APRENDE CON NOSOTROS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>APRENDE CON NOSTROS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>APRENDE CON NOSTROS</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Card className="bg-dark text-white" style={{width: '80%'}}>
      <Card.Img src="images/iconos/deigodav-icos.jpeg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card> */}
    </div>
  );
};

export default Home;