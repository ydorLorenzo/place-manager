import React, { ReactElement, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import PlaceCard from '../../elements/PlaceCard';
import { getPlacesAction } from '../../../redux/actions/places';
import { useAppDispatch, useAppSelector } from '../../../types/hooks';

export default function PlaceList (): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlacesAction());
  }, [dispatch]);

  const places = useAppSelector(state => state.places.list);
  const loading = useAppSelector(state => state.places.loading);
  const error = useAppSelector(state => state.places.error);

  return (
    <Row>
      <Col>
        {loading && <p>Loading...</p>}
        {places.length > 0 && places.map((p, key) => <PlaceCard key={key} place={p}/>)}
        {places.length === 0 && !loading && <p>There are no places to show!</p>}
        {error && !loading && <p>{error}</p>}
      </Col>
    </Row>
  );
}
