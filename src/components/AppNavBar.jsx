import React from 'react';
import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'boxicons';
import logo from '../../public/images/iconos/deigodav-icos.jpeg'

const AppNavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                
                <Navbar.Brand as={Link} to='/' ><img src={logo} style={{width: '22%'}} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                        {/* <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/products' >Diseños</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        
                        <Nav.Link as={Link} to='/products'>Productos</Nav.Link>
                        <Nav.Link as={Link} to='/desings'>Diseños</Nav.Link>
                        <Nav.Link as={Link} to='/learn' style={{width: '230px'}}>Aprende con nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className='cont-us'>
                <Card style={{ width: '12%' }}>
                    <Card.Body>
                        <Card.Title>Contactanos</Card.Title>
                        <div className='socials'>
                        <Card.Link href='https://api.whatsapp.com/send?phone=573002573877&text=hola.&fbclid=PAAaZCOmbywdDamgSlH-zo3stoH7U3AXdxtwa11KWKs_a4RRaJpwtx4Q8SHrM'>
                            <box-icon type='logo' name='whatsapp'></box-icon>
                        </Card.Link>
                        <Card.Link href="https://www.instagram.com/diegodavila_a/?hl=es">
                            <box-icon type='logo' name='instagram'></box-icon>
                        </Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </Navbar>

    );
};

export default AppNavBar;