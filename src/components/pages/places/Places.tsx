import React, { useEffect } from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import PlaceCard from '../../elements/PlaceCard';
import { PlacesReducerType } from '../../../redux/reducers/places';
import { getPlacesAction } from '../../../redux/actions/places';

interface stateType extends DefaultRootState {
  places: PlacesReducerType
}

function PlaceList (): JSX.Element {
  const dispatch = useDispatch();
  const places = useSelector((state: stateType) => state.places.list);
  const loading = useSelector((state: stateType) => state.places.loading);
  const error = useSelector((state: stateType) => state.places.error);

  useEffect(() => {
    dispatch(getPlacesAction())
  }, [])
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

export default PlaceList;
