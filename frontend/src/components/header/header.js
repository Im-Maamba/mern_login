import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
      <Container>
        <Navbar.Brand href="/">Crystal Code Labs❤</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav>
            <Nav.Link href="/links">links</Nav.Link>
            <NavDropdown title="Nikil" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
