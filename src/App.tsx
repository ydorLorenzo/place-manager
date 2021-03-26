import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import PlaceList from './components/pages/places/Places';

const App: React.FC = () => {
  return (
    <Container className="mt-5">
      <Nav>
        <Nav.Item>
          <Nav.Link />
        </Nav.Item>
      </Nav>
      <Row>
        {/*<Col md="6" sm="12" lg="4" className="offset-md-3 offset-lg-4">*/}
        {/*  <LoginBox />*/}
        {/*</Col>*/}
        <Col>
          <PlaceList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
