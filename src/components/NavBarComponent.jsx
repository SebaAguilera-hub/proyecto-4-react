import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
export const NavBarComponent = () => {
  return (
  
     <Navbar bg="dark" data-bs-theme="dark" className='nav'>
        <Container>
          <Navbar.Brand as={Link} to="/proyecto-4-react/">PizzasChillan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/proyecto-4-react/">Sobre nosotros</Nav.Link>
            <Nav.Link as={Link} to="/proyecto-4-react/menu">Nuestro menu</Nav.Link>
            <Nav.Link as={Link} to="/proyecto-4-react/reservacion">Reservaciones</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  );
}

