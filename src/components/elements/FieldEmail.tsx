import React from 'react';

import { Form, FormControlProps } from 'react-bootstrap';

interface Props extends FormControlProps {
  autoFocus: boolean;
  required: boolean
}

export default function FieldEmail({autoFocus=false, required=true, ...rest }: Props): JSX.Element {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control {...rest} required={required} type="email" autoFocus={autoFocus} />
    </Form.Group>
  )
}
