/* import logo from './logo.svg'; */
import './App.css';
/* import Button from "react-bootstrap/button"; */
import Container from "react-bootstrap/container";
import Nav from "react-bootstrap/nav";
import Navbar from "react-bootstrap/navbar";
import NavDropdown from "react-bootstrap/navDropdown";

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Navbar.Brand href="/">
                  Amaji
                </Navbar.Brand>
            </Nav>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Petitos Petshop</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Pokemon React [Soon]
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
