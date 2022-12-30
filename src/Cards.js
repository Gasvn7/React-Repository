import './App.css';
import { Col, Card, Button, Row,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

function CardsRow() {
    return (
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Petitos Shop ES</Card.Title>
                <Card.Text>
                  Project made for an Evaluation in Digital House. 
                  A petshop where you can find some cosmetics for your dog or cat, food and toys.
                </Card.Text>
                <Button  variant="outline-secondary">Petitos Shop</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Pokemon React</Card.Title>
                <Card.Text>
                  Project made for test abilities in React and APIs, conssuming API from PokéAPI.
                </Card.Text>
                <Button  variant="outline-secondary">Lets take them</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>In Progress</Card.Title>
                <Card.Text>
                  Some project in process to ve developed.
                </Card.Text>
                <Button  variant="outline-secondary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    )


}


export default CardsRow;