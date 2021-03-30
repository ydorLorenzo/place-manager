import React, { ReactElement, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import PlaceCard from '../../elements/PlaceCard';
import { getPlacesAction } from '../../../redux/actions/places';
import { useAppDispatch, useAppSelector } from '../../../types/hooks';
import { PlacesStateType } from '../../../redux/reducers/places';

export default function PlaceList (): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlacesAction());
  }, []);

  const { list, loading, error } = useAppSelector<PlacesStateType>(state => state.places);

  return (
    <Row>
      {loading && <p>Loading...</p>}
      {list.length > 0 && list.map((p, key) => <Col md={4} lg={6} className='mb-3' key={key}><PlaceCard place={p}/></Col>)}
      {list.length === 0 && !loading && <p>There are no places to show!</p>}
      {error && !loading && <p>{error}</p>}
    </Row>
  );
}
