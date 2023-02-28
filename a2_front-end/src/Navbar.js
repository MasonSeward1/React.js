import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar bg="dark" sticky='top' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>Assignment 2 Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/">Submitted Movie Ratings</Nav.Link>
            <Nav.Link href="/SubmitMovie">Submit a Movie Rating!</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;