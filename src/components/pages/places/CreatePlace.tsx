import React, { FormEvent, ReactElement, useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPlaceAction } from '../../../redux/actions/place';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../redux/store';

interface State {
  name: string,
  description: string,
  province: string,
  address: string,
  city: string,
  categories: Array<number>;
  zip: number;
  lon: number;
  lat: number;
  phone: string;
  cap: number;
}

const initialState: State = {
  name: '',
  description: '',
  province: '',
  address: '',
  city: '',
  categories: [],
  zip: 10000,
  lon: 0,
  lat: 0,
  phone: '',
  cap: 10000
};

export default function PlaceForm (): ReactElement {

  const [state, setState] = useState<State>(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const { adding, error } = useSelector((state: RootState) => state.place);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (adding) setFlag(true);
    if (!adding && flag) {
      !error && history.replace('/places');
      setFlag(false)
    }
  }, [adding]);

  const CATEGORY_OPTIONS = ['Ristorante', 'Bar', 'Pescheria'];

  const numbArray2StrArray = (n: Array<number>): Array<string> => {
    return n.map(o => o + '');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addPlaceAction(state));
    setState(initialState);

  };

  const handleCategories = (event: any) => {
    setState({ ...state, categories: [...event.target.selectedOptions].map(o => parseInt(o.value)) });
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group className="col-md-8">
              <Form.Label>Name</Form.Label>
              <Form.Control value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>Categories</Form.Label>
              <Form.Control value={numbArray2StrArray(state.categories)} as="select" multiple
                            onChange={handleCategories}>
                {CATEGORY_OPTIONS.map((value, key) => (<option key={key} value={key + 1}>{value}</option>))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="col-md-12">
              <Form.Label>Description</Form.Label>
              <Form.Control value={state.description}
                            onChange={(e) => setState({ ...state, description: e.target.value })}/>
            </Form.Group>
            <Form.Group className="col-md-12">
              <Form.Label>Address</Form.Label>
              <Form.Control value={state.address} placeholder="1234 Main St"
                            onChange={(e) => setState({ ...state, address: e.target.value })}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>Province</Form.Label>
              <Form.Control value={state.province} onChange={(e) => setState({ ...state, province: e.target.value })}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>City</Form.Label>
              <Form.Control value={state.city} onChange={(e) => setState({ ...state, city: e.target.value })}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>Zip</Form.Label>
              <input pattern={'^[0-9]{5}$'} value={state.zip}
                     onChange={(e) => setState({ ...state, zip: parseInt(e.target.value) })} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Longitude</Form.Label>
              <input value={state.lon} onChange={(e) => setState({ ...state, lon: parseFloat(e.target.value) })}
                     type="number" step={.0000001} min={-180} max={180} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Latitude</Form.Label>
              <input value={state.lat} onChange={(e) => setState({ ...state, lat: parseFloat(e.target.value) })}
                     type="number" step={.0000001} min={-90} max={90} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Phone</Form.Label>
              <input value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })}
                     pattern={'^(([+]|00)39\\s{0,1})?(([0-6][0-9]))([0-9]{8})$'} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Cap</Form.Label>
              <input value={state.cap} onChange={(e) => setState({ ...state, cap: parseInt(e.target.value) })}
                     pattern={'^[0-9]{5}$'} className="form-control"/>
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
