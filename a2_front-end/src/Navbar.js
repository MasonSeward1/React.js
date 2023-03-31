import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar bg="dark" sticky='top' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>CP3010 Project - Word Guessing Game!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/">Try and guess the word!</Nav.Link>
            <Nav.Link href="/ViewStatistics">View Statistics</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;