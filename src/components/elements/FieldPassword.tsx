import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// bootstrap
import { Form } from 'react-bootstrap';

interface Props extends RouteComponentProps<any> {
  autoFocus: boolean;
  required: boolean
}

function FieldPassword({autoFocus=false, required=true, ...rest }: Props): JSX.Element {
  return (
    <Form.Group controlId="formBasicUsername">
      <Form.Label>Password</Form.Label>
      <Form.Control {...rest} required={required} type="password" autoFocus={autoFocus} />
    </Form.Group>
  )
}

export default FieldPassword;
