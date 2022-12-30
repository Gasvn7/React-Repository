import './App.css';
import { Col, Row, Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import CardsRow from "./Cards.js";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Navbar.Brand href="/">
                    My Portfolio
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
      </header>
      <main >  
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7}>
          <Image src="https://picsum.photos/900/400"
          fluid
          rounded
          className=""
          />
          </Col>
          <Col sm={5}>
            <h1 class="font-weight-light">Let me introduce</h1>
            <p class="mt-4">
              I'm Gastón, a FullStack Developter graduated from Digital House. This portfolio is created with React and React-Bootstrap just for testing how it works. Hope you like my profile.
              You can explore as you wish, there're my projects below.
            </p>
          </Col>
        </Row>
        <CardsRow/>
      </Container>
      </main>
    </div>
  );
}

export default App;
