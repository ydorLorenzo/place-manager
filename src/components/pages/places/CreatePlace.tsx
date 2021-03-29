import React, { FormEvent, ReactElement, useState } from 'react';
import { Button, Card, Form, FormControl, FormControlProps, FormProps } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addPlaceAction } from '../../../redux/actions/place';
import { Place } from '../../../types/places';
import { useFormInput } from '../../shared/FormInputHook';

interface PlaceProps extends FormProps {
  addPlace: any
}

function PlaceForm (props: PlaceProps): ReactElement {
  const [validated, setValidated] = useState(false);

  const name = useFormInput('');
  const description = useFormInput('')
  const province = useFormInput('')
  const address = useFormInput('')
  const city = useFormInput('')

  const CATEGORY_OPTIONS = [
    'Ristorante',
    'Bar',
    'Pescheria'
  ];

  const handleSubmit = (event: React.FormEvent<typeof FormControl & FormControlProps>) => {
    const form = event.currentTarget;
    props.addPlace({
      name, description, province, address, city
    })
  }

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Row>
            <Form.Group className="col-md-8">
              <Form.Label>Name</Form.Label>
              <Form.Control {...name}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>Categories</Form.Label>
              <Form.Control as="select">
                {CATEGORY_OPTIONS.map((value,key) => (<option key={key} value={key}>{value}</option>))}
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
              <input pattern={'^[0-9]{5}$'} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Longitude</Form.Label>
              <input type="number" step={.1} min={-180} max={180} className="form-control" />
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Latitude</Form.Label>
              <input type="number" step={.1} min={-90} max={90} className="form-control" />
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Phone</Form.Label>
              <input pattern={'^(([+]|00)39\\s{0,1})?(([0-6][0-9]))([0-9]{8})$'} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Cap</Form.Label>
              <input pattern={'^[0-9]{5}$'} className="form-control"/>
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
