import React from 'react';

import { Form, FormControlProps } from 'react-bootstrap';

interface Props extends FormControlProps {
  autoFocus: boolean;
  required: boolean
}

function FieldUsername({autoFocus=false, required=true, ...rest }: Props): JSX.Element {
  return (
    <Form.Group controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control {...rest} required={required} type="text" autoFocus={autoFocus} />
    </Form.Group>
  )
}

export default FieldUsername;
