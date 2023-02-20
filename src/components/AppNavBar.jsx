import React from 'react';
import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'boxicons';
import logo from '../assets/diegodav-ico.jpg'

const AppNavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                
                <Navbar.Brand href="#home"><img src={logo} style={{width: '22%'}} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/products'>Products</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className='cont-us'>
                <Card style={{ width: '8rem' }}>
                    <Card.Body>
                        <Card.Title>Contactanos</Card.Title>
                        <Card.Link href='https://api.whatsapp.com/send?phone=573002573877&text=hola.&fbclid=PAAaZCOmbywdDamgSlH-zo3stoH7U3AXdxtwa11KWKs_a4RRaJpwtx4Q8SHrM'>
                            <box-icon type='logo' name='whatsapp'></box-icon>
                        </Card.Link>
                        <Card.Link href="https://www.instagram.com/diegodavila_a/?hl=es">
                            <box-icon type='logo' name='instagram'></box-icon>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>

        </Navbar>

    );
};

export default AppNavBar;