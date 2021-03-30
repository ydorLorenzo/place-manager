import React, { ReactElement } from 'react';
import { Card, Col, FormControlProps, NavLink, Row } from 'react-bootstrap';

import { Place } from '../../types/places';
import { useSelector } from 'react-redux';
import { removePlaceAction } from '../../redux/actions/place';
import { RootState } from '../../redux/store';
import { useAppDispatch } from '../../types/hooks';

interface Props extends FormControlProps {
  place: Place
}

export default function PlaceCard ({ place }: Props): ReactElement {

  const tokenExist = !!localStorage.getItem('token');

  const { authenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    place.id && dispatch(removePlaceAction(place.id));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title><h3>{place.name}</h3></Card.Title>
        <Row>
          <Col md={12}>
            <Card.Text>{place.address}, {place.city}, {place.province}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{place.description}</Card.Text>
          </Col>
        </Row>
        {
          (authenticated || tokenExist) &&
          <Row>
            <Col>
              <NavLink href="" onClick={handleDelete} className="text-danger text-right">Delete</NavLink>
            </Col>
          </Row>
        }
      </Card.Body>
    </Card>
  );
}
