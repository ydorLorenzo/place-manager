import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Form } from 'react-bootstrap';

interface Props extends RouteComponentProps<any> {
  autoFocus: boolean;
  required: boolean
}

function FieldUsername({autoFocus=false, required=true, ...rest }: Props): JSX.Element {
  return (
    <Form.Group controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control {...rest} required={required} type="text" placeholder="Enter username" autoFocus={autoFocus} />
    </Form.Group>
  )
}

export default FieldUsername;
