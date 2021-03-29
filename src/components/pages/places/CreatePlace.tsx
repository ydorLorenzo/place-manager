import React, { FormEvent, ReactElement } from 'react';
import { Button, Card, Form, FormProps } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addPlaceAction } from '../../../redux/actions/place';
import { Place } from '../../../types/places';
import { useFormInput } from '../../shared/FormInputHook';

interface PlaceProps extends FormProps {
  addPlace: any
}

function PlaceForm (props: PlaceProps): ReactElement {

  const name = useFormInput('');
  const description = useFormInput('');
  const province = useFormInput('');
  const address = useFormInput('');
  const city = useFormInput('');
  const categories = useFormInput([1]);
  const zip = useFormInput('');
  const lon = useFormInput(0);
  const lat = useFormInput(0);
  const phone = useFormInput('');
  const cap = useFormInput('');

  const CATEGORY_OPTIONS = [
    'Ristorante',
    'Bar',
    'Pescheria'
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    props.addPlace({
      name: name.value, description: description.value, province: province.value,
      address: address.value, city: city.value, categories: [categories.value], zip: zip.value,
      lon: lon.value, lat: lat.value, cap: cap.value, phone: phone.value
    });
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group className="col-md-8">
              <Form.Label>Name</Form.Label>
              <Form.Control {...name}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>Categories</Form.Label>
              <Form.Control {...categories} as="select" multiple>
                {CATEGORY_OPTIONS.map((value, key) => (<option key={key} value={key + 1}>{value}</option>))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="col-md-12">
              <Form.Label>Description</Form.Label>
              <Form.Control {...description}/>
            </Form.Group>
            <Form.Group className="col-md-12">
              <Form.Label>Address</Form.Label>
              <Form.Control {...address} placeholder="1234 Main St"/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>Province</Form.Label>
              <Form.Control {...province}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>City</Form.Label>
              <Form.Control {...city}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>Zip</Form.Label>
              <input pattern={'^[0-9]{5}$'} {...zip} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Longitude</Form.Label>
              <input {...lon} type="number" step={.0000001} min={-180} max={180} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Latitude</Form.Label>
              <input {...lat} type="number" step={.0000001} min={-90} max={90} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Phone</Form.Label>
              <input {...phone} pattern={'^(([+]|00)39\\s{0,1})?(([0-6][0-9]))([0-9]{8})$'} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Cap</Form.Label>
              <input {...cap} pattern={'^[0-9]{5}$'} className="form-control"/>
            </Form.Group>
          </Form.Row>
          <Button type="submit" className="col-lg-2 offset-lg-5 col-sm-4 offset-sm-4 w-100">
            Save
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default connect(
  () => ({}),
  dispatch => ({
    addPlace: (place: Place) => dispatch(addPlaceAction(place))
  })
)(PlaceForm);
