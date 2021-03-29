import React from 'react';
import { Card, Col, FormControlProps, NavLink, Row } from 'react-bootstrap';

import { Place } from '../../types/places';
import { connect } from 'react-redux';
import { removePlaceAction } from '../../redux/actions/place';

interface Props extends FormControlProps {
  place: Place,
  removePlace: any
}

function PlaceCard (props: Props): JSX.Element {

  const isAuthenticated = !!localStorage.getItem('token');

  const handleDelete = () => {
    props.removePlace(props.place.id);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title><h3>{props.place.name}</h3></Card.Title>
        <Row>
          <Col>
            <Card.Text>{props.place.description}</Card.Text>
          </Col>
        </Row>
        {
          isAuthenticated &&
          <Row>
            <Col>
              <NavLink href="" onClick={handleDelete} className="text-danger">Delete</NavLink>
            </Col>
          </Row>
        }
      </Card.Body>
    </Card>
  );
}

export default connect(
  () => ({}),
  dispatch => ({ removePlace: (id: number) => dispatch(removePlaceAction(id)) })
)(PlaceCard);
