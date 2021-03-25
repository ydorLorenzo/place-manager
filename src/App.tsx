import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoginBox from './components/pages/login/LoginBox';

const App: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md="6" sm="12" lg="4" className="offset-md-3 offset-lg-4">
          <LoginBox />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
