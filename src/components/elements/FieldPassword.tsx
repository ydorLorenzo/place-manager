import React from 'react';

// bootstrap
import { Form, FormControlProps } from 'react-bootstrap';

interface Props extends FormControlProps {
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
