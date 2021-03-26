import React from 'react';
import { Card, Col, FormControlProps, Row } from 'react-bootstrap';

import { Place } from '../../types/places';

interface Props extends FormControlProps {
  place: Place
}

function PlaceCard(props: Props): JSX.Element {
  return (
    <Card>
      <Card.Body>
        <Card.Title><h3>{props.place.name}</h3></Card.Title>
        <Row>
          <Col>
            <Card.Text>{props.place.description}</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{props.place.phone}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default PlaceCard;
