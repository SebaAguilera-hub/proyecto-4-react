import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
export const NavBarComponent = () => {
  return (
  
     <Navbar bg="primary" data-bs-theme="dark" className='nav'>
        <Container>
          <Navbar.Brand as={Link} to="/">PizzasChillan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">Sobre nosotros</Nav.Link>
            <Nav.Link as={Link} to="/menu">Nuestro menu</Nav.Link>
            <Nav.Link as={Link} to="/reservacion">Reservaciones</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  );
}

