import React, { PropsWithChildren } from 'react';
import { Col, Row } from 'react-bootstrap';

import { Place } from '../../../types/places';
import PlaceCard from '../../elements/PlaceCard';

interface Props extends PropsWithChildren<any> {
  places: Place[]
}

function PlaceList (props: Props): JSX.Element {
  const placeListElements = props.places.length ?
    props.places.map((p, key) => <PlaceCard key={key} place={p}/>) :
    (<Col><p>There are no places to show!</p></Col>);

  return (
    <Row>
      {placeListElements}
    </Row>
  );
}

export default PlaceList;
