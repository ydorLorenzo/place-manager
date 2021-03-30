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
      setFlag(false);
    }
  }, [adding]);

  const CATEGORY_OPTIONS = ['Ristorante', 'Bar', 'Pescheria'];

  const numbArray2StrArray = (n: Array<number>): Array<string> => {
    return n.map(o => o + '');
  };
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      event.preventDefault();
      dispatch(addPlaceAction(state));
      setState(initialState);
    }

  };

  const handleCategories = (event: any) => {
    setState({ ...state, categories: [...event.target.selectedOptions].map(o => parseInt(o.value)) });
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit} validated={validated}>
          <Form.Row>
            <Form.Group className="col-md-8" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control required value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })}/>
              <Form.Control.Feedback type="invalid">
                Please use a name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-4" controlId="validationCustom02">
              <Form.Label>Categories</Form.Label>
              <Form.Control value={numbArray2StrArray(state.categories)} as="select" multiple required
                            onChange={handleCategories}>
                {CATEGORY_OPTIONS.map((value, key) => (<option key={key} value={key + 1}>{value}</option>))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select at least one category
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-12" controlId="validationCustom03">
              <Form.Label>Description</Form.Label>
              <Form.Control value={state.description} required
                            onChange={(e) => setState({ ...state, description: e.target.value })}/>
              <Form.Control.Feedback type="invalid">
                Please write some description
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-12" controlId="validationCustom04">
              <Form.Label>Address</Form.Label>
              <Form.Control value={state.address} placeholder="1234 Main St" required
                            onChange={(e) => setState({ ...state, address: e.target.value })}/>
              <Form.Control.Feedback type="invalid">
                Please write the address
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>Province</Form.Label>
              <Form.Control value={state.province} required
                            onChange={(e) => setState({ ...state, province: e.target.value })}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>City</Form.Label>
              <Form.Control required value={state.city} onChange={(e) => setState({ ...state, city: e.target.value })}/>
            </Form.Group>
            <Form.Group className="col-md-4">
              <Form.Label>Zip</Form.Label>
              <input pattern={'^[0-9]{5}$'} value={state.zip} required
                     onChange={(e) => setState({ ...state, zip: parseInt(e.target.value) })} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Longitude</Form.Label>
              <input required value={state.lon}
                     onChange={(e) => setState({ ...state, lon: parseFloat(e.target.value) })}
                     type="number" step={.0000001} min={-180} max={180} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Latitude</Form.Label>
              <input required value={state.lat}
                     onChange={(e) => setState({ ...state, lat: parseFloat(e.target.value) })}
                     type="number" step={.0000001} min={-90} max={90} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Phone</Form.Label>
              <input required value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })}
                     pattern={'^(([+]|00)39\\s{0,1})?(([0-6][0-9]))([0-9]{8})$'} className="form-control"/>
            </Form.Group>
            <Form.Group className="col-md-3">
              <Form.Label>Cap</Form.Label>
              <input required value={state.cap} onChange={(e) => setState({ ...state, cap: parseInt(e.target.value) })}
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
